import { useState } from 'react'
import { Fragment } from 'react/jsx-runtime'
import { format } from 'date-fns'
import {
  ArrowLeft,
  MoreVertical,
  Edit,
  Paperclip,
  Phone,
  ImagePlus,
  Plus,
  Search as SearchIcon,
  Send,
  Video,
  MessagesSquare,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { NewChat } from './components/new-chat'
import { type ChatUser, type Convo } from './data/chat-types'
import { conversations } from './data/convo.json'

export function Chats() {
  const [search, setSearch] = useState('')
  const [selectedUser, setSelectedUser] = useState<ChatUser | null>(null)
  const [mobileSelectedUser, setMobileSelectedUser] = useState<ChatUser | null>(null)
  const [createConversationDialogOpened, setCreateConversationDialog] = useState(false)

  // Filtered data based on the search query
  const filteredChatList = conversations.filter(({ fullName }) =>
    fullName.toLowerCase().includes(search.trim().toLowerCase())
  )

  const currentMessage = selectedUser?.messages.reduce(
    (acc: Record<string, Convo[]>, obj) => {
      const key = format(obj.timestamp, 'd MMM, yyyy')
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    },
    {}
  )

  const users = conversations.map(({ messages, ...user }) => user)

  return (
    <>
      <div className='flex flex-1 flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight'>AI Chat</h1>
            <p className='text-muted-foreground'>
              Soru çözümü için AI asistanınız
            </p>
          </div>
          <Button onClick={() => setCreateConversationDialog(true)}>
            <MessagesSquare className='mr-2 h-4 w-4' />
            Yeni Sohbet
          </Button>
        </div>

        <section className='flex h-[calc(100vh-12rem)] gap-6 rounded-lg border bg-card'>
          {/* Left Side */}
          <div className='flex w-full flex-col gap-2 border-r sm:w-56 lg:w-72 2xl:w-80'>
            <div className='sticky top-0 z-10 bg-background p-4'>
              <div className='flex items-center justify-between py-2'>
                <h2 className='font-semibold'>Sohbetler</h2>
              </div>

              <label
                className={cn(
                  'focus-within:ring-1 focus-within:ring-ring focus-within:outline-hidden',
                  'flex h-10 w-full items-center space-x-0 rounded-md border border-input ps-2'
                )}
              >
                <SearchIcon size={15} className='me-2 stroke-muted-foreground' />
                <span className='sr-only'>Search</span>
                <input
                  type='text'
                  className='w-full flex-1 bg-inherit text-sm focus-visible:outline-hidden'
                  placeholder='Sohbet ara...'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
            </div>

            <ScrollArea className='flex-1 px-2'>
              {filteredChatList.map((chatUsr) => {
                const { id, profile, username, messages, fullName } = chatUsr
                const lastConvo = messages[0]
                const lastMsg =
                  lastConvo.sender === 'You'
                    ? `Sen: ${lastConvo.message}`
                    : lastConvo.message
                return (
                  <Fragment key={id}>
                    <button
                      type='button'
                      className={cn(
                        'group hover:bg-accent hover:text-accent-foreground',
                        'flex w-full rounded-md px-3 py-2 text-start text-sm transition-colors',
                        selectedUser?.id === id && 'bg-muted'
                      )}
                      onClick={() => {
                        setSelectedUser(chatUsr)
                        setMobileSelectedUser(chatUsr)
                      }}
                    >
                      <div className='flex gap-3'>
                        <Avatar>
                          <AvatarImage src={profile} alt={username} />
                          <AvatarFallback>{username}</AvatarFallback>
                        </Avatar>
                        <div className='flex-1 overflow-hidden'>
                          <span className='block font-medium'>{fullName}</span>
                          <span className='block truncate text-xs text-muted-foreground'>
                            {lastMsg}
                          </span>
                        </div>
                      </div>
                    </button>
                    <Separator className='my-1' />
                  </Fragment>
                )
              })}
            </ScrollArea>
          </div>

          {/* Right Side */}
          {selectedUser ? (
            <div
              className={cn(
                'absolute inset-0 z-50 flex w-full flex-1 flex-col sm:static sm:flex',
                !mobileSelectedUser && 'hidden sm:flex'
              )}
            >
              {/* Top Part */}
              <div className='flex flex-none justify-between border-b p-4'>
                <div className='flex gap-3'>
                  <Button
                    size='icon'
                    variant='ghost'
                    className='-ms-2 sm:hidden'
                    onClick={() => setMobileSelectedUser(null)}
                  >
                    <ArrowLeft className='rtl:rotate-180' />
                  </Button>
                  <div className='flex items-center gap-3'>
                    <Avatar>
                      <AvatarImage src={selectedUser.profile} alt={selectedUser.username} />
                      <AvatarFallback>{selectedUser.username}</AvatarFallback>
                    </Avatar>
                    <div>
                      <span className='block text-sm font-medium'>{selectedUser.fullName}</span>
                      <span className='block text-xs text-muted-foreground'>
                        {selectedUser.title}
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-1'>
                  <Button size='icon' variant='ghost' className='h-8 w-8'>
                    <MoreVertical className='h-4 w-4' />
                  </Button>
                </div>
              </div>

              {/* Conversation */}
              <div className='flex flex-1 flex-col gap-4 p-4'>
                <div className='flex flex-1 overflow-y-auto'>
                  <div className='flex w-full flex-col-reverse gap-4'>
                    {currentMessage &&
                      Object.keys(currentMessage).map((key) => (
                        <Fragment key={key}>
                          {currentMessage[key].map((msg, index) => (
                            <div
                              key={`${msg.sender}-${msg.timestamp}-${index}`}
                              className={cn(
                                'max-w-[75%] rounded-2xl px-4 py-2',
                                msg.sender === 'You'
                                  ? 'ml-auto bg-primary text-primary-foreground'
                                  : 'mr-auto bg-muted'
                              )}
                            >
                              <p className='text-sm'>{msg.message}</p>
                              <span
                                className={cn(
                                  'mt-1 block text-xs opacity-75',
                                  msg.sender === 'You' && 'text-right'
                                )}
                              >
                                {format(msg.timestamp, 'H:mm')}
                              </span>
                            </div>
                          ))}
                          <div className='text-center text-xs text-muted-foreground'>{key}</div>
                        </Fragment>
                      ))}
                  </div>
                </div>
                <form className='flex gap-2'>
                  <div className='flex flex-1 items-center gap-2 rounded-md border bg-background px-3 py-2'>
                    <Button type='button' size='icon' variant='ghost' className='h-8 w-8'>
                      <Plus size={18} />
                    </Button>
                    <input
                      type='text'
                      placeholder='Mesajınızı yazın...'
                      className='flex-1 bg-transparent text-sm focus-visible:outline-none'
                    />
                    <Button type='button' size='icon' variant='ghost' className='h-8 w-8'>
                      <Send size={18} />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className='flex flex-1 flex-col items-center justify-center'>
              <div className='flex size-16 items-center justify-center rounded-full border-2 border-border'>
                <MessagesSquare className='h-8 w-8 text-muted-foreground' />
              </div>
              <div className='mt-4 text-center'>
                <h3 className='text-lg font-semibold'>Sohbet seçin</h3>
                <p className='text-sm text-muted-foreground'>
                  Başlamak için bir sohbet seçin veya yenisini oluşturun
                </p>
              </div>
            </div>
          )}
        </section>
      </div>

      <NewChat
        users={users}
        onOpenChange={setCreateConversationDialog}
        open={createConversationDialogOpened}
      />
    </>
  )
}

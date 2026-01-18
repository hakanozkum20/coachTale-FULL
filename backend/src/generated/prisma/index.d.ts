
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PushToken
 * 
 */
export type PushToken = $Result.DefaultSelection<Prisma.$PushTokenPayload>
/**
 * Model ChatSession
 * 
 */
export type ChatSession = $Result.DefaultSelection<Prisma.$ChatSessionPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model QuestionSolution
 * 
 */
export type QuestionSolution = $Result.DefaultSelection<Prisma.$QuestionSolutionPayload>
/**
 * Model ExamResult
 * 
 */
export type ExamResult = $Result.DefaultSelection<Prisma.$ExamResultPayload>
/**
 * Model ExamDetail
 * 
 */
export type ExamDetail = $Result.DefaultSelection<Prisma.$ExamDetailPayload>
/**
 * Model StudyPlan
 * 
 */
export type StudyPlan = $Result.DefaultSelection<Prisma.$StudyPlanPayload>
/**
 * Model PomodoroSession
 * 
 */
export type PomodoroSession = $Result.DefaultSelection<Prisma.$PomodoroSessionPayload>
/**
 * Model Badge
 * 
 */
export type Badge = $Result.DefaultSelection<Prisma.$BadgePayload>
/**
 * Model UserBadge
 * 
 */
export type UserBadge = $Result.DefaultSelection<Prisma.$UserBadgePayload>
/**
 * Model NotificationSettings
 * 
 */
export type NotificationSettings = $Result.DefaultSelection<Prisma.$NotificationSettingsPayload>
/**
 * Model PomodoroSettings
 * 
 */
export type PomodoroSettings = $Result.DefaultSelection<Prisma.$PomodoroSettingsPayload>
/**
 * Model DailyFocusStats
 * 
 */
export type DailyFocusStats = $Result.DefaultSelection<Prisma.$DailyFocusStatsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  STUDENT: 'STUDENT',
  PARENT: 'PARENT',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PlanType: {
  FREE: 'FREE',
  STANDARD: 'STANDARD',
  PREMIUM: 'PREMIUM'
};

export type PlanType = (typeof PlanType)[keyof typeof PlanType]


export const ExamType: {
  TYT: 'TYT',
  AYT: 'AYT',
  YDS: 'YDS',
  LGS: 'LGS',
  OTHER: 'OTHER'
};

export type ExamType = (typeof ExamType)[keyof typeof ExamType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

export type ExamType = $Enums.ExamType

export const ExamType: typeof $Enums.ExamType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pushToken`: Exposes CRUD operations for the **PushToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PushTokens
    * const pushTokens = await prisma.pushToken.findMany()
    * ```
    */
  get pushToken(): Prisma.PushTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatSession`: Exposes CRUD operations for the **ChatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.ChatSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionSolution`: Exposes CRUD operations for the **QuestionSolution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionSolutions
    * const questionSolutions = await prisma.questionSolution.findMany()
    * ```
    */
  get questionSolution(): Prisma.QuestionSolutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examResult`: Exposes CRUD operations for the **ExamResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamResults
    * const examResults = await prisma.examResult.findMany()
    * ```
    */
  get examResult(): Prisma.ExamResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examDetail`: Exposes CRUD operations for the **ExamDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamDetails
    * const examDetails = await prisma.examDetail.findMany()
    * ```
    */
  get examDetail(): Prisma.ExamDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studyPlan`: Exposes CRUD operations for the **StudyPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudyPlans
    * const studyPlans = await prisma.studyPlan.findMany()
    * ```
    */
  get studyPlan(): Prisma.StudyPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pomodoroSession`: Exposes CRUD operations for the **PomodoroSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PomodoroSessions
    * const pomodoroSessions = await prisma.pomodoroSession.findMany()
    * ```
    */
  get pomodoroSession(): Prisma.PomodoroSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badge`: Exposes CRUD operations for the **Badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.BadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userBadge`: Exposes CRUD operations for the **UserBadge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBadges
    * const userBadges = await prisma.userBadge.findMany()
    * ```
    */
  get userBadge(): Prisma.UserBadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationSettings`: Exposes CRUD operations for the **NotificationSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationSettings
    * const notificationSettings = await prisma.notificationSettings.findMany()
    * ```
    */
  get notificationSettings(): Prisma.NotificationSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pomodoroSettings`: Exposes CRUD operations for the **PomodoroSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PomodoroSettings
    * const pomodoroSettings = await prisma.pomodoroSettings.findMany()
    * ```
    */
  get pomodoroSettings(): Prisma.PomodoroSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyFocusStats`: Exposes CRUD operations for the **DailyFocusStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyFocusStats
    * const dailyFocusStats = await prisma.dailyFocusStats.findMany()
    * ```
    */
  get dailyFocusStats(): Prisma.DailyFocusStatsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PushToken: 'PushToken',
    ChatSession: 'ChatSession',
    ChatMessage: 'ChatMessage',
    QuestionSolution: 'QuestionSolution',
    ExamResult: 'ExamResult',
    ExamDetail: 'ExamDetail',
    StudyPlan: 'StudyPlan',
    PomodoroSession: 'PomodoroSession',
    Badge: 'Badge',
    UserBadge: 'UserBadge',
    NotificationSettings: 'NotificationSettings',
    PomodoroSettings: 'PomodoroSettings',
    DailyFocusStats: 'DailyFocusStats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "pushToken" | "chatSession" | "chatMessage" | "questionSolution" | "examResult" | "examDetail" | "studyPlan" | "pomodoroSession" | "badge" | "userBadge" | "notificationSettings" | "pomodoroSettings" | "dailyFocusStats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PushToken: {
        payload: Prisma.$PushTokenPayload<ExtArgs>
        fields: Prisma.PushTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PushTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PushTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>
          }
          findFirst: {
            args: Prisma.PushTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PushTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>
          }
          findMany: {
            args: Prisma.PushTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>[]
          }
          create: {
            args: Prisma.PushTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>
          }
          createMany: {
            args: Prisma.PushTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PushTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>[]
          }
          delete: {
            args: Prisma.PushTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>
          }
          update: {
            args: Prisma.PushTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>
          }
          deleteMany: {
            args: Prisma.PushTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PushTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PushTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>[]
          }
          upsert: {
            args: Prisma.PushTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>
          }
          aggregate: {
            args: Prisma.PushTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePushToken>
          }
          groupBy: {
            args: Prisma.PushTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PushTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PushTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PushTokenCountAggregateOutputType> | number
          }
        }
      }
      ChatSession: {
        payload: Prisma.$ChatSessionPayload<ExtArgs>
        fields: Prisma.ChatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findFirst: {
            args: Prisma.ChatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findMany: {
            args: Prisma.ChatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          create: {
            args: Prisma.ChatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          createMany: {
            args: Prisma.ChatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          delete: {
            args: Prisma.ChatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          update: {
            args: Prisma.ChatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          upsert: {
            args: Prisma.ChatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.ChatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      QuestionSolution: {
        payload: Prisma.$QuestionSolutionPayload<ExtArgs>
        fields: Prisma.QuestionSolutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionSolutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSolutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionSolutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSolutionPayload>
          }
          findFirst: {
            args: Prisma.QuestionSolutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSolutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionSolutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSolutionPayload>
          }
          findMany: {
            args: Prisma.QuestionSolutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSolutionPayload>[]
          }
          create: {
            args: Prisma.QuestionSolutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSolutionPayload>
          }
          createMany: {
            args: Prisma.QuestionSolutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionSolutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSolutionPayload>[]
          }
          delete: {
            args: Prisma.QuestionSolutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSolutionPayload>
          }
          update: {
            args: Prisma.QuestionSolutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSolutionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionSolutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionSolutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionSolutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSolutionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionSolutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSolutionPayload>
          }
          aggregate: {
            args: Prisma.QuestionSolutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionSolution>
          }
          groupBy: {
            args: Prisma.QuestionSolutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionSolutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionSolutionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionSolutionCountAggregateOutputType> | number
          }
        }
      }
      ExamResult: {
        payload: Prisma.$ExamResultPayload<ExtArgs>
        fields: Prisma.ExamResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultPayload>
          }
          findFirst: {
            args: Prisma.ExamResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultPayload>
          }
          findMany: {
            args: Prisma.ExamResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultPayload>[]
          }
          create: {
            args: Prisma.ExamResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultPayload>
          }
          createMany: {
            args: Prisma.ExamResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultPayload>[]
          }
          delete: {
            args: Prisma.ExamResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultPayload>
          }
          update: {
            args: Prisma.ExamResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultPayload>
          }
          deleteMany: {
            args: Prisma.ExamResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultPayload>[]
          }
          upsert: {
            args: Prisma.ExamResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultPayload>
          }
          aggregate: {
            args: Prisma.ExamResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamResult>
          }
          groupBy: {
            args: Prisma.ExamResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamResultCountArgs<ExtArgs>
            result: $Utils.Optional<ExamResultCountAggregateOutputType> | number
          }
        }
      }
      ExamDetail: {
        payload: Prisma.$ExamDetailPayload<ExtArgs>
        fields: Prisma.ExamDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamDetailPayload>
          }
          findFirst: {
            args: Prisma.ExamDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamDetailPayload>
          }
          findMany: {
            args: Prisma.ExamDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamDetailPayload>[]
          }
          create: {
            args: Prisma.ExamDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamDetailPayload>
          }
          createMany: {
            args: Prisma.ExamDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamDetailPayload>[]
          }
          delete: {
            args: Prisma.ExamDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamDetailPayload>
          }
          update: {
            args: Prisma.ExamDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamDetailPayload>
          }
          deleteMany: {
            args: Prisma.ExamDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamDetailPayload>[]
          }
          upsert: {
            args: Prisma.ExamDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamDetailPayload>
          }
          aggregate: {
            args: Prisma.ExamDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamDetail>
          }
          groupBy: {
            args: Prisma.ExamDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamDetailCountArgs<ExtArgs>
            result: $Utils.Optional<ExamDetailCountAggregateOutputType> | number
          }
        }
      }
      StudyPlan: {
        payload: Prisma.$StudyPlanPayload<ExtArgs>
        fields: Prisma.StudyPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudyPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudyPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          findFirst: {
            args: Prisma.StudyPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudyPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          findMany: {
            args: Prisma.StudyPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>[]
          }
          create: {
            args: Prisma.StudyPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          createMany: {
            args: Prisma.StudyPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudyPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>[]
          }
          delete: {
            args: Prisma.StudyPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          update: {
            args: Prisma.StudyPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          deleteMany: {
            args: Prisma.StudyPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudyPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudyPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>[]
          }
          upsert: {
            args: Prisma.StudyPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          aggregate: {
            args: Prisma.StudyPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudyPlan>
          }
          groupBy: {
            args: Prisma.StudyPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudyPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudyPlanCountArgs<ExtArgs>
            result: $Utils.Optional<StudyPlanCountAggregateOutputType> | number
          }
        }
      }
      PomodoroSession: {
        payload: Prisma.$PomodoroSessionPayload<ExtArgs>
        fields: Prisma.PomodoroSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PomodoroSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PomodoroSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>
          }
          findFirst: {
            args: Prisma.PomodoroSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PomodoroSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>
          }
          findMany: {
            args: Prisma.PomodoroSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>[]
          }
          create: {
            args: Prisma.PomodoroSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>
          }
          createMany: {
            args: Prisma.PomodoroSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PomodoroSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>[]
          }
          delete: {
            args: Prisma.PomodoroSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>
          }
          update: {
            args: Prisma.PomodoroSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>
          }
          deleteMany: {
            args: Prisma.PomodoroSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PomodoroSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PomodoroSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>[]
          }
          upsert: {
            args: Prisma.PomodoroSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSessionPayload>
          }
          aggregate: {
            args: Prisma.PomodoroSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePomodoroSession>
          }
          groupBy: {
            args: Prisma.PomodoroSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PomodoroSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PomodoroSessionCountArgs<ExtArgs>
            result: $Utils.Optional<PomodoroSessionCountAggregateOutputType> | number
          }
        }
      }
      Badge: {
        payload: Prisma.$BadgePayload<ExtArgs>
        fields: Prisma.BadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findFirst: {
            args: Prisma.BadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findMany: {
            args: Prisma.BadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          create: {
            args: Prisma.BadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          createMany: {
            args: Prisma.BadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          delete: {
            args: Prisma.BadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          update: {
            args: Prisma.BadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          deleteMany: {
            args: Prisma.BadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          upsert: {
            args: Prisma.BadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          aggregate: {
            args: Prisma.BadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadge>
          }
          groupBy: {
            args: Prisma.BadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgeCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeCountAggregateOutputType> | number
          }
        }
      }
      UserBadge: {
        payload: Prisma.$UserBadgePayload<ExtArgs>
        fields: Prisma.UserBadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findFirst: {
            args: Prisma.UserBadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findMany: {
            args: Prisma.UserBadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          create: {
            args: Prisma.UserBadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          createMany: {
            args: Prisma.UserBadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          delete: {
            args: Prisma.UserBadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          update: {
            args: Prisma.UserBadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          deleteMany: {
            args: Prisma.UserBadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserBadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          upsert: {
            args: Prisma.UserBadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          aggregate: {
            args: Prisma.UserBadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBadge>
          }
          groupBy: {
            args: Prisma.UserBadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBadgeCountArgs<ExtArgs>
            result: $Utils.Optional<UserBadgeCountAggregateOutputType> | number
          }
        }
      }
      NotificationSettings: {
        payload: Prisma.$NotificationSettingsPayload<ExtArgs>
        fields: Prisma.NotificationSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          findFirst: {
            args: Prisma.NotificationSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          findMany: {
            args: Prisma.NotificationSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>[]
          }
          create: {
            args: Prisma.NotificationSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          createMany: {
            args: Prisma.NotificationSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>[]
          }
          delete: {
            args: Prisma.NotificationSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          update: {
            args: Prisma.NotificationSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>[]
          }
          upsert: {
            args: Prisma.NotificationSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          aggregate: {
            args: Prisma.NotificationSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationSettings>
          }
          groupBy: {
            args: Prisma.NotificationSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationSettingsCountAggregateOutputType> | number
          }
        }
      }
      PomodoroSettings: {
        payload: Prisma.$PomodoroSettingsPayload<ExtArgs>
        fields: Prisma.PomodoroSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PomodoroSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PomodoroSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSettingsPayload>
          }
          findFirst: {
            args: Prisma.PomodoroSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PomodoroSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSettingsPayload>
          }
          findMany: {
            args: Prisma.PomodoroSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSettingsPayload>[]
          }
          create: {
            args: Prisma.PomodoroSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSettingsPayload>
          }
          createMany: {
            args: Prisma.PomodoroSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PomodoroSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSettingsPayload>[]
          }
          delete: {
            args: Prisma.PomodoroSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSettingsPayload>
          }
          update: {
            args: Prisma.PomodoroSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSettingsPayload>
          }
          deleteMany: {
            args: Prisma.PomodoroSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PomodoroSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PomodoroSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSettingsPayload>[]
          }
          upsert: {
            args: Prisma.PomodoroSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomodoroSettingsPayload>
          }
          aggregate: {
            args: Prisma.PomodoroSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePomodoroSettings>
          }
          groupBy: {
            args: Prisma.PomodoroSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PomodoroSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PomodoroSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<PomodoroSettingsCountAggregateOutputType> | number
          }
        }
      }
      DailyFocusStats: {
        payload: Prisma.$DailyFocusStatsPayload<ExtArgs>
        fields: Prisma.DailyFocusStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyFocusStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyFocusStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyFocusStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyFocusStatsPayload>
          }
          findFirst: {
            args: Prisma.DailyFocusStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyFocusStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyFocusStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyFocusStatsPayload>
          }
          findMany: {
            args: Prisma.DailyFocusStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyFocusStatsPayload>[]
          }
          create: {
            args: Prisma.DailyFocusStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyFocusStatsPayload>
          }
          createMany: {
            args: Prisma.DailyFocusStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyFocusStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyFocusStatsPayload>[]
          }
          delete: {
            args: Prisma.DailyFocusStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyFocusStatsPayload>
          }
          update: {
            args: Prisma.DailyFocusStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyFocusStatsPayload>
          }
          deleteMany: {
            args: Prisma.DailyFocusStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyFocusStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyFocusStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyFocusStatsPayload>[]
          }
          upsert: {
            args: Prisma.DailyFocusStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyFocusStatsPayload>
          }
          aggregate: {
            args: Prisma.DailyFocusStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyFocusStats>
          }
          groupBy: {
            args: Prisma.DailyFocusStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyFocusStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyFocusStatsCountArgs<ExtArgs>
            result: $Utils.Optional<DailyFocusStatsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    pushToken?: PushTokenOmit
    chatSession?: ChatSessionOmit
    chatMessage?: ChatMessageOmit
    questionSolution?: QuestionSolutionOmit
    examResult?: ExamResultOmit
    examDetail?: ExamDetailOmit
    studyPlan?: StudyPlanOmit
    pomodoroSession?: PomodoroSessionOmit
    badge?: BadgeOmit
    userBadge?: UserBadgeOmit
    notificationSettings?: NotificationSettingsOmit
    pomodoroSettings?: PomodoroSettingsOmit
    dailyFocusStats?: DailyFocusStatsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chatSessions: number
    solutions: number
    examResults: number
    studyPlans: number
    pomodoroSessions: number
    userBadges: number
    students: number
    pushTokens: number
    dailyFocusStats: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatSessions?: boolean | UserCountOutputTypeCountChatSessionsArgs
    solutions?: boolean | UserCountOutputTypeCountSolutionsArgs
    examResults?: boolean | UserCountOutputTypeCountExamResultsArgs
    studyPlans?: boolean | UserCountOutputTypeCountStudyPlansArgs
    pomodoroSessions?: boolean | UserCountOutputTypeCountPomodoroSessionsArgs
    userBadges?: boolean | UserCountOutputTypeCountUserBadgesArgs
    students?: boolean | UserCountOutputTypeCountStudentsArgs
    pushTokens?: boolean | UserCountOutputTypeCountPushTokensArgs
    dailyFocusStats?: boolean | UserCountOutputTypeCountDailyFocusStatsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSolutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionSolutionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExamResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamResultWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPomodoroSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PomodoroSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPushTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyFocusStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyFocusStatsWhereInput
  }


  /**
   * Count Type ChatSessionCountOutputType
   */

  export type ChatSessionCountOutputType = {
    messages: number
  }

  export type ChatSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatSessionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSessionCountOutputType
     */
    select?: ChatSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type ExamResultCountOutputType
   */

  export type ExamResultCountOutputType = {
    details: number
  }

  export type ExamResultCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | ExamResultCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * ExamResultCountOutputType without action
   */
  export type ExamResultCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResultCountOutputType
     */
    select?: ExamResultCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamResultCountOutputType without action
   */
  export type ExamResultCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamDetailWhereInput
  }


  /**
   * Count Type BadgeCountOutputType
   */

  export type BadgeCountOutputType = {
    userBadges: number
  }

  export type BadgeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBadges?: boolean | BadgeCountOutputTypeCountUserBadgesArgs
  }

  // Custom InputTypes
  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeCountOutputType
     */
    select?: BadgeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeCountUserBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatarUrl: string | null
    role: $Enums.Role | null
    plan: $Enums.PlanType | null
    createdAt: Date | null
    updatedAt: Date | null
    googleId: string | null
    password: string | null
    parentId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatarUrl: string | null
    role: $Enums.Role | null
    plan: $Enums.PlanType | null
    createdAt: Date | null
    updatedAt: Date | null
    googleId: string | null
    password: string | null
    parentId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    avatarUrl: number
    role: number
    plan: number
    createdAt: number
    updatedAt: number
    googleId: number
    password: number
    parentId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatarUrl?: true
    role?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
    googleId?: true
    password?: true
    parentId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatarUrl?: true
    role?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
    googleId?: true
    password?: true
    parentId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatarUrl?: true
    role?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
    googleId?: true
    password?: true
    parentId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    avatarUrl: string | null
    role: $Enums.Role
    plan: $Enums.PlanType
    createdAt: Date
    updatedAt: Date
    googleId: string | null
    password: string | null
    parentId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    role?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    googleId?: boolean
    password?: boolean
    parentId?: boolean
    chatSessions?: boolean | User$chatSessionsArgs<ExtArgs>
    solutions?: boolean | User$solutionsArgs<ExtArgs>
    examResults?: boolean | User$examResultsArgs<ExtArgs>
    studyPlans?: boolean | User$studyPlansArgs<ExtArgs>
    pomodoroSessions?: boolean | User$pomodoroSessionsArgs<ExtArgs>
    userBadges?: boolean | User$userBadgesArgs<ExtArgs>
    parent?: boolean | User$parentArgs<ExtArgs>
    students?: boolean | User$studentsArgs<ExtArgs>
    pushTokens?: boolean | User$pushTokensArgs<ExtArgs>
    notificationSettings?: boolean | User$notificationSettingsArgs<ExtArgs>
    pomodoroSettings?: boolean | User$pomodoroSettingsArgs<ExtArgs>
    dailyFocusStats?: boolean | User$dailyFocusStatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    role?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    googleId?: boolean
    password?: boolean
    parentId?: boolean
    parent?: boolean | User$parentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    role?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    googleId?: boolean
    password?: boolean
    parentId?: boolean
    parent?: boolean | User$parentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    role?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    googleId?: boolean
    password?: boolean
    parentId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "avatarUrl" | "role" | "plan" | "createdAt" | "updatedAt" | "googleId" | "password" | "parentId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatSessions?: boolean | User$chatSessionsArgs<ExtArgs>
    solutions?: boolean | User$solutionsArgs<ExtArgs>
    examResults?: boolean | User$examResultsArgs<ExtArgs>
    studyPlans?: boolean | User$studyPlansArgs<ExtArgs>
    pomodoroSessions?: boolean | User$pomodoroSessionsArgs<ExtArgs>
    userBadges?: boolean | User$userBadgesArgs<ExtArgs>
    parent?: boolean | User$parentArgs<ExtArgs>
    students?: boolean | User$studentsArgs<ExtArgs>
    pushTokens?: boolean | User$pushTokensArgs<ExtArgs>
    notificationSettings?: boolean | User$notificationSettingsArgs<ExtArgs>
    pomodoroSettings?: boolean | User$pomodoroSettingsArgs<ExtArgs>
    dailyFocusStats?: boolean | User$dailyFocusStatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | User$parentArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | User$parentArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      chatSessions: Prisma.$ChatSessionPayload<ExtArgs>[]
      solutions: Prisma.$QuestionSolutionPayload<ExtArgs>[]
      examResults: Prisma.$ExamResultPayload<ExtArgs>[]
      studyPlans: Prisma.$StudyPlanPayload<ExtArgs>[]
      pomodoroSessions: Prisma.$PomodoroSessionPayload<ExtArgs>[]
      userBadges: Prisma.$UserBadgePayload<ExtArgs>[]
      parent: Prisma.$UserPayload<ExtArgs> | null
      students: Prisma.$UserPayload<ExtArgs>[]
      pushTokens: Prisma.$PushTokenPayload<ExtArgs>[]
      notificationSettings: Prisma.$NotificationSettingsPayload<ExtArgs> | null
      pomodoroSettings: Prisma.$PomodoroSettingsPayload<ExtArgs> | null
      dailyFocusStats: Prisma.$DailyFocusStatsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      avatarUrl: string | null
      role: $Enums.Role
      plan: $Enums.PlanType
      createdAt: Date
      updatedAt: Date
      googleId: string | null
      password: string | null
      parentId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatSessions<T extends User$chatSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solutions<T extends User$solutionsArgs<ExtArgs> = {}>(args?: Subset<T, User$solutionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionSolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    examResults<T extends User$examResultsArgs<ExtArgs> = {}>(args?: Subset<T, User$examResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studyPlans<T extends User$studyPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$studyPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pomodoroSessions<T extends User$pomodoroSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$pomodoroSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userBadges<T extends User$userBadgesArgs<ExtArgs> = {}>(args?: Subset<T, User$userBadgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parent<T extends User$parentArgs<ExtArgs> = {}>(args?: Subset<T, User$parentArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    students<T extends User$studentsArgs<ExtArgs> = {}>(args?: Subset<T, User$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pushTokens<T extends User$pushTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$pushTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificationSettings<T extends User$notificationSettingsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationSettingsArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pomodoroSettings<T extends User$pomodoroSettingsArgs<ExtArgs> = {}>(args?: Subset<T, User$pomodoroSettingsArgs<ExtArgs>>): Prisma__PomodoroSettingsClient<$Result.GetResult<Prisma.$PomodoroSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dailyFocusStats<T extends User$dailyFocusStatsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyFocusStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyFocusStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly plan: FieldRef<"User", 'PlanType'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly parentId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.chatSessions
   */
  export type User$chatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    cursor?: ChatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * User.solutions
   */
  export type User$solutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSolution
     */
    select?: QuestionSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSolution
     */
    omit?: QuestionSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSolutionInclude<ExtArgs> | null
    where?: QuestionSolutionWhereInput
    orderBy?: QuestionSolutionOrderByWithRelationInput | QuestionSolutionOrderByWithRelationInput[]
    cursor?: QuestionSolutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionSolutionScalarFieldEnum | QuestionSolutionScalarFieldEnum[]
  }

  /**
   * User.examResults
   */
  export type User$examResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResult
     */
    omit?: ExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResultInclude<ExtArgs> | null
    where?: ExamResultWhereInput
    orderBy?: ExamResultOrderByWithRelationInput | ExamResultOrderByWithRelationInput[]
    cursor?: ExamResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamResultScalarFieldEnum | ExamResultScalarFieldEnum[]
  }

  /**
   * User.studyPlans
   */
  export type User$studyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    where?: StudyPlanWhereInput
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    cursor?: StudyPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * User.pomodoroSessions
   */
  export type User$pomodoroSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSession
     */
    omit?: PomodoroSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    where?: PomodoroSessionWhereInput
    orderBy?: PomodoroSessionOrderByWithRelationInput | PomodoroSessionOrderByWithRelationInput[]
    cursor?: PomodoroSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PomodoroSessionScalarFieldEnum | PomodoroSessionScalarFieldEnum[]
  }

  /**
   * User.userBadges
   */
  export type User$userBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    cursor?: UserBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * User.parent
   */
  export type User$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.students
   */
  export type User$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.pushTokens
   */
  export type User$pushTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    where?: PushTokenWhereInput
    orderBy?: PushTokenOrderByWithRelationInput | PushTokenOrderByWithRelationInput[]
    cursor?: PushTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PushTokenScalarFieldEnum | PushTokenScalarFieldEnum[]
  }

  /**
   * User.notificationSettings
   */
  export type User$notificationSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    where?: NotificationSettingsWhereInput
  }

  /**
   * User.pomodoroSettings
   */
  export type User$pomodoroSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSettings
     */
    select?: PomodoroSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSettings
     */
    omit?: PomodoroSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSettingsInclude<ExtArgs> | null
    where?: PomodoroSettingsWhereInput
  }

  /**
   * User.dailyFocusStats
   */
  export type User$dailyFocusStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyFocusStats
     */
    select?: DailyFocusStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyFocusStats
     */
    omit?: DailyFocusStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyFocusStatsInclude<ExtArgs> | null
    where?: DailyFocusStatsWhereInput
    orderBy?: DailyFocusStatsOrderByWithRelationInput | DailyFocusStatsOrderByWithRelationInput[]
    cursor?: DailyFocusStatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyFocusStatsScalarFieldEnum | DailyFocusStatsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PushToken
   */

  export type AggregatePushToken = {
    _count: PushTokenCountAggregateOutputType | null
    _min: PushTokenMinAggregateOutputType | null
    _max: PushTokenMaxAggregateOutputType | null
  }

  export type PushTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    platform: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type PushTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    platform: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type PushTokenCountAggregateOutputType = {
    id: number
    token: number
    platform: number
    userId: number
    createdAt: number
    _all: number
  }


  export type PushTokenMinAggregateInputType = {
    id?: true
    token?: true
    platform?: true
    userId?: true
    createdAt?: true
  }

  export type PushTokenMaxAggregateInputType = {
    id?: true
    token?: true
    platform?: true
    userId?: true
    createdAt?: true
  }

  export type PushTokenCountAggregateInputType = {
    id?: true
    token?: true
    platform?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type PushTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushToken to aggregate.
     */
    where?: PushTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushTokens to fetch.
     */
    orderBy?: PushTokenOrderByWithRelationInput | PushTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PushTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PushTokens
    **/
    _count?: true | PushTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PushTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PushTokenMaxAggregateInputType
  }

  export type GetPushTokenAggregateType<T extends PushTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePushToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePushToken[P]>
      : GetScalarType<T[P], AggregatePushToken[P]>
  }




  export type PushTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushTokenWhereInput
    orderBy?: PushTokenOrderByWithAggregationInput | PushTokenOrderByWithAggregationInput[]
    by: PushTokenScalarFieldEnum[] | PushTokenScalarFieldEnum
    having?: PushTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PushTokenCountAggregateInputType | true
    _min?: PushTokenMinAggregateInputType
    _max?: PushTokenMaxAggregateInputType
  }

  export type PushTokenGroupByOutputType = {
    id: string
    token: string
    platform: string
    userId: string
    createdAt: Date
    _count: PushTokenCountAggregateOutputType | null
    _min: PushTokenMinAggregateOutputType | null
    _max: PushTokenMaxAggregateOutputType | null
  }

  type GetPushTokenGroupByPayload<T extends PushTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PushTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PushTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PushTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PushTokenGroupByOutputType[P]>
        }
      >
    >


  export type PushTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    platform?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushToken"]>

  export type PushTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    platform?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushToken"]>

  export type PushTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    platform?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushToken"]>

  export type PushTokenSelectScalar = {
    id?: boolean
    token?: boolean
    platform?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type PushTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "platform" | "userId" | "createdAt", ExtArgs["result"]["pushToken"]>
  export type PushTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PushTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PushTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PushTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PushToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      platform: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["pushToken"]>
    composites: {}
  }

  type PushTokenGetPayload<S extends boolean | null | undefined | PushTokenDefaultArgs> = $Result.GetResult<Prisma.$PushTokenPayload, S>

  type PushTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PushTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PushTokenCountAggregateInputType | true
    }

  export interface PushTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PushToken'], meta: { name: 'PushToken' } }
    /**
     * Find zero or one PushToken that matches the filter.
     * @param {PushTokenFindUniqueArgs} args - Arguments to find a PushToken
     * @example
     * // Get one PushToken
     * const pushToken = await prisma.pushToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PushTokenFindUniqueArgs>(args: SelectSubset<T, PushTokenFindUniqueArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PushToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PushTokenFindUniqueOrThrowArgs} args - Arguments to find a PushToken
     * @example
     * // Get one PushToken
     * const pushToken = await prisma.pushToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PushTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PushTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushTokenFindFirstArgs} args - Arguments to find a PushToken
     * @example
     * // Get one PushToken
     * const pushToken = await prisma.pushToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PushTokenFindFirstArgs>(args?: SelectSubset<T, PushTokenFindFirstArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushTokenFindFirstOrThrowArgs} args - Arguments to find a PushToken
     * @example
     * // Get one PushToken
     * const pushToken = await prisma.pushToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PushTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PushTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PushTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PushTokens
     * const pushTokens = await prisma.pushToken.findMany()
     * 
     * // Get first 10 PushTokens
     * const pushTokens = await prisma.pushToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pushTokenWithIdOnly = await prisma.pushToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PushTokenFindManyArgs>(args?: SelectSubset<T, PushTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PushToken.
     * @param {PushTokenCreateArgs} args - Arguments to create a PushToken.
     * @example
     * // Create one PushToken
     * const PushToken = await prisma.pushToken.create({
     *   data: {
     *     // ... data to create a PushToken
     *   }
     * })
     * 
     */
    create<T extends PushTokenCreateArgs>(args: SelectSubset<T, PushTokenCreateArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PushTokens.
     * @param {PushTokenCreateManyArgs} args - Arguments to create many PushTokens.
     * @example
     * // Create many PushTokens
     * const pushToken = await prisma.pushToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PushTokenCreateManyArgs>(args?: SelectSubset<T, PushTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PushTokens and returns the data saved in the database.
     * @param {PushTokenCreateManyAndReturnArgs} args - Arguments to create many PushTokens.
     * @example
     * // Create many PushTokens
     * const pushToken = await prisma.pushToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PushTokens and only return the `id`
     * const pushTokenWithIdOnly = await prisma.pushToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PushTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PushTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PushToken.
     * @param {PushTokenDeleteArgs} args - Arguments to delete one PushToken.
     * @example
     * // Delete one PushToken
     * const PushToken = await prisma.pushToken.delete({
     *   where: {
     *     // ... filter to delete one PushToken
     *   }
     * })
     * 
     */
    delete<T extends PushTokenDeleteArgs>(args: SelectSubset<T, PushTokenDeleteArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PushToken.
     * @param {PushTokenUpdateArgs} args - Arguments to update one PushToken.
     * @example
     * // Update one PushToken
     * const pushToken = await prisma.pushToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PushTokenUpdateArgs>(args: SelectSubset<T, PushTokenUpdateArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PushTokens.
     * @param {PushTokenDeleteManyArgs} args - Arguments to filter PushTokens to delete.
     * @example
     * // Delete a few PushTokens
     * const { count } = await prisma.pushToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PushTokenDeleteManyArgs>(args?: SelectSubset<T, PushTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PushTokens
     * const pushToken = await prisma.pushToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PushTokenUpdateManyArgs>(args: SelectSubset<T, PushTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushTokens and returns the data updated in the database.
     * @param {PushTokenUpdateManyAndReturnArgs} args - Arguments to update many PushTokens.
     * @example
     * // Update many PushTokens
     * const pushToken = await prisma.pushToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PushTokens and only return the `id`
     * const pushTokenWithIdOnly = await prisma.pushToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PushTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PushTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PushToken.
     * @param {PushTokenUpsertArgs} args - Arguments to update or create a PushToken.
     * @example
     * // Update or create a PushToken
     * const pushToken = await prisma.pushToken.upsert({
     *   create: {
     *     // ... data to create a PushToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PushToken we want to update
     *   }
     * })
     */
    upsert<T extends PushTokenUpsertArgs>(args: SelectSubset<T, PushTokenUpsertArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PushTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushTokenCountArgs} args - Arguments to filter PushTokens to count.
     * @example
     * // Count the number of PushTokens
     * const count = await prisma.pushToken.count({
     *   where: {
     *     // ... the filter for the PushTokens we want to count
     *   }
     * })
    **/
    count<T extends PushTokenCountArgs>(
      args?: Subset<T, PushTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PushTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PushToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PushTokenAggregateArgs>(args: Subset<T, PushTokenAggregateArgs>): Prisma.PrismaPromise<GetPushTokenAggregateType<T>>

    /**
     * Group by PushToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PushTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PushTokenGroupByArgs['orderBy'] }
        : { orderBy?: PushTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PushTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPushTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PushToken model
   */
  readonly fields: PushTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PushToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PushTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PushToken model
   */
  interface PushTokenFieldRefs {
    readonly id: FieldRef<"PushToken", 'String'>
    readonly token: FieldRef<"PushToken", 'String'>
    readonly platform: FieldRef<"PushToken", 'String'>
    readonly userId: FieldRef<"PushToken", 'String'>
    readonly createdAt: FieldRef<"PushToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PushToken findUnique
   */
  export type PushTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * Filter, which PushToken to fetch.
     */
    where: PushTokenWhereUniqueInput
  }

  /**
   * PushToken findUniqueOrThrow
   */
  export type PushTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * Filter, which PushToken to fetch.
     */
    where: PushTokenWhereUniqueInput
  }

  /**
   * PushToken findFirst
   */
  export type PushTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * Filter, which PushToken to fetch.
     */
    where?: PushTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushTokens to fetch.
     */
    orderBy?: PushTokenOrderByWithRelationInput | PushTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushTokens.
     */
    cursor?: PushTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushTokens.
     */
    distinct?: PushTokenScalarFieldEnum | PushTokenScalarFieldEnum[]
  }

  /**
   * PushToken findFirstOrThrow
   */
  export type PushTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * Filter, which PushToken to fetch.
     */
    where?: PushTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushTokens to fetch.
     */
    orderBy?: PushTokenOrderByWithRelationInput | PushTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushTokens.
     */
    cursor?: PushTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushTokens.
     */
    distinct?: PushTokenScalarFieldEnum | PushTokenScalarFieldEnum[]
  }

  /**
   * PushToken findMany
   */
  export type PushTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * Filter, which PushTokens to fetch.
     */
    where?: PushTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushTokens to fetch.
     */
    orderBy?: PushTokenOrderByWithRelationInput | PushTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PushTokens.
     */
    cursor?: PushTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushTokens.
     */
    skip?: number
    distinct?: PushTokenScalarFieldEnum | PushTokenScalarFieldEnum[]
  }

  /**
   * PushToken create
   */
  export type PushTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PushToken.
     */
    data: XOR<PushTokenCreateInput, PushTokenUncheckedCreateInput>
  }

  /**
   * PushToken createMany
   */
  export type PushTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PushTokens.
     */
    data: PushTokenCreateManyInput | PushTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PushToken createManyAndReturn
   */
  export type PushTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PushTokens.
     */
    data: PushTokenCreateManyInput | PushTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PushToken update
   */
  export type PushTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PushToken.
     */
    data: XOR<PushTokenUpdateInput, PushTokenUncheckedUpdateInput>
    /**
     * Choose, which PushToken to update.
     */
    where: PushTokenWhereUniqueInput
  }

  /**
   * PushToken updateMany
   */
  export type PushTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PushTokens.
     */
    data: XOR<PushTokenUpdateManyMutationInput, PushTokenUncheckedUpdateManyInput>
    /**
     * Filter which PushTokens to update
     */
    where?: PushTokenWhereInput
    /**
     * Limit how many PushTokens to update.
     */
    limit?: number
  }

  /**
   * PushToken updateManyAndReturn
   */
  export type PushTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * The data used to update PushTokens.
     */
    data: XOR<PushTokenUpdateManyMutationInput, PushTokenUncheckedUpdateManyInput>
    /**
     * Filter which PushTokens to update
     */
    where?: PushTokenWhereInput
    /**
     * Limit how many PushTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PushToken upsert
   */
  export type PushTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PushToken to update in case it exists.
     */
    where: PushTokenWhereUniqueInput
    /**
     * In case the PushToken found by the `where` argument doesn't exist, create a new PushToken with this data.
     */
    create: XOR<PushTokenCreateInput, PushTokenUncheckedCreateInput>
    /**
     * In case the PushToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PushTokenUpdateInput, PushTokenUncheckedUpdateInput>
  }

  /**
   * PushToken delete
   */
  export type PushTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * Filter which PushToken to delete.
     */
    where: PushTokenWhereUniqueInput
  }

  /**
   * PushToken deleteMany
   */
  export type PushTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushTokens to delete
     */
    where?: PushTokenWhereInput
    /**
     * Limit how many PushTokens to delete.
     */
    limit?: number
  }

  /**
   * PushToken without action
   */
  export type PushTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
  }


  /**
   * Model ChatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    createdAt: Date | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    createdAt: Date | null
  }

  export type ChatSessionCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    createdAt: number
    _all: number
  }


  export type ChatSessionMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
  }

  export type ChatSessionCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSession to aggregate.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type ChatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithAggregationInput | ChatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: ChatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    id: string
    userId: string
    title: string | null
    createdAt: Date
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
  }

  export type ChatSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "createdAt", ExtArgs["result"]["chatSession"]>
  export type ChatSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string | null
      createdAt: Date
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = $Result.GetResult<Prisma.$ChatSessionPayload, S>

  type ChatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface ChatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'], meta: { name: 'ChatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {ChatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatSessionFindUniqueArgs>(args: SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatSessionFindFirstArgs>(args?: SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatSessionFindManyArgs>(args?: SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatSession.
     * @param {ChatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends ChatSessionCreateArgs>(args: SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatSessions.
     * @param {ChatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatSessionCreateManyArgs>(args?: SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatSessions and returns the data saved in the database.
     * @param {ChatSessionCreateManyAndReturnArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatSession.
     * @param {ChatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends ChatSessionDeleteArgs>(args: SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatSession.
     * @param {ChatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatSessionUpdateArgs>(args: SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatSessions.
     * @param {ChatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatSessionUpdateManyArgs>(args: SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions and returns the data updated in the database.
     * @param {ChatSessionUpdateManyAndReturnArgs} args - Arguments to update many ChatSessions.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatSession.
     * @param {ChatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends ChatSessionUpsertArgs>(args: SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends ChatSessionCountArgs>(
      args?: Subset<T, ChatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChatSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatSession model
   */
  readonly fields: ChatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends ChatSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatSession model
   */
  interface ChatSessionFieldRefs {
    readonly id: FieldRef<"ChatSession", 'String'>
    readonly userId: FieldRef<"ChatSession", 'String'>
    readonly title: FieldRef<"ChatSession", 'String'>
    readonly createdAt: FieldRef<"ChatSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatSession findUnique
   */
  export type ChatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findUniqueOrThrow
   */
  export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findFirst
   */
  export type ChatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findFirstOrThrow
   */
  export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findMany
   */
  export type ChatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSessions to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession create
   */
  export type ChatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatSession.
     */
    data: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
  }

  /**
   * ChatSession createMany
   */
  export type ChatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession createManyAndReturn
   */
  export type ChatSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession update
   */
  export type ChatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatSession.
     */
    data: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
    /**
     * Choose, which ChatSession to update.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession updateMany
   */
  export type ChatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession updateManyAndReturn
   */
  export type ChatSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession upsert
   */
  export type ChatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatSession to update in case it exists.
     */
    where: ChatSessionWhereUniqueInput
    /**
     * In case the ChatSession found by the `where` argument doesn't exist, create a new ChatSession with this data.
     */
    create: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
    /**
     * In case the ChatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
  }

  /**
   * ChatSession delete
   */
  export type ChatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter which ChatSession to delete.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession deleteMany
   */
  export type ChatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSessions to delete
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to delete.
     */
    limit?: number
  }

  /**
   * ChatSession.messages
   */
  export type ChatSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatSession without action
   */
  export type ChatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    sessionId: number
    role: number
    content: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    sessionId: string
    role: string
    content: string
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "role" | "content" | "createdAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      session: Prisma.$ChatSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      role: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatSessionDefaultArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly sessionId: FieldRef<"ChatMessage", 'String'>
    readonly role: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model QuestionSolution
   */

  export type AggregateQuestionSolution = {
    _count: QuestionSolutionCountAggregateOutputType | null
    _min: QuestionSolutionMinAggregateOutputType | null
    _max: QuestionSolutionMaxAggregateOutputType | null
  }

  export type QuestionSolutionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    imageUrl: string | null
    ocrText: string | null
    solution: string | null
    lesson: string | null
    createdAt: Date | null
  }

  export type QuestionSolutionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    imageUrl: string | null
    ocrText: string | null
    solution: string | null
    lesson: string | null
    createdAt: Date | null
  }

  export type QuestionSolutionCountAggregateOutputType = {
    id: number
    userId: number
    imageUrl: number
    ocrText: number
    solution: number
    lesson: number
    createdAt: number
    _all: number
  }


  export type QuestionSolutionMinAggregateInputType = {
    id?: true
    userId?: true
    imageUrl?: true
    ocrText?: true
    solution?: true
    lesson?: true
    createdAt?: true
  }

  export type QuestionSolutionMaxAggregateInputType = {
    id?: true
    userId?: true
    imageUrl?: true
    ocrText?: true
    solution?: true
    lesson?: true
    createdAt?: true
  }

  export type QuestionSolutionCountAggregateInputType = {
    id?: true
    userId?: true
    imageUrl?: true
    ocrText?: true
    solution?: true
    lesson?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionSolutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionSolution to aggregate.
     */
    where?: QuestionSolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionSolutions to fetch.
     */
    orderBy?: QuestionSolutionOrderByWithRelationInput | QuestionSolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionSolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionSolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionSolutions
    **/
    _count?: true | QuestionSolutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionSolutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionSolutionMaxAggregateInputType
  }

  export type GetQuestionSolutionAggregateType<T extends QuestionSolutionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionSolution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionSolution[P]>
      : GetScalarType<T[P], AggregateQuestionSolution[P]>
  }




  export type QuestionSolutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionSolutionWhereInput
    orderBy?: QuestionSolutionOrderByWithAggregationInput | QuestionSolutionOrderByWithAggregationInput[]
    by: QuestionSolutionScalarFieldEnum[] | QuestionSolutionScalarFieldEnum
    having?: QuestionSolutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionSolutionCountAggregateInputType | true
    _min?: QuestionSolutionMinAggregateInputType
    _max?: QuestionSolutionMaxAggregateInputType
  }

  export type QuestionSolutionGroupByOutputType = {
    id: string
    userId: string
    imageUrl: string
    ocrText: string | null
    solution: string | null
    lesson: string | null
    createdAt: Date
    _count: QuestionSolutionCountAggregateOutputType | null
    _min: QuestionSolutionMinAggregateOutputType | null
    _max: QuestionSolutionMaxAggregateOutputType | null
  }

  type GetQuestionSolutionGroupByPayload<T extends QuestionSolutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionSolutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionSolutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionSolutionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionSolutionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSolutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageUrl?: boolean
    ocrText?: boolean
    solution?: boolean
    lesson?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionSolution"]>

  export type QuestionSolutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageUrl?: boolean
    ocrText?: boolean
    solution?: boolean
    lesson?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionSolution"]>

  export type QuestionSolutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageUrl?: boolean
    ocrText?: boolean
    solution?: boolean
    lesson?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionSolution"]>

  export type QuestionSolutionSelectScalar = {
    id?: boolean
    userId?: boolean
    imageUrl?: boolean
    ocrText?: boolean
    solution?: boolean
    lesson?: boolean
    createdAt?: boolean
  }

  export type QuestionSolutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "imageUrl" | "ocrText" | "solution" | "lesson" | "createdAt", ExtArgs["result"]["questionSolution"]>
  export type QuestionSolutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestionSolutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestionSolutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuestionSolutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionSolution"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      imageUrl: string
      ocrText: string | null
      solution: string | null
      lesson: string | null
      createdAt: Date
    }, ExtArgs["result"]["questionSolution"]>
    composites: {}
  }

  type QuestionSolutionGetPayload<S extends boolean | null | undefined | QuestionSolutionDefaultArgs> = $Result.GetResult<Prisma.$QuestionSolutionPayload, S>

  type QuestionSolutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionSolutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionSolutionCountAggregateInputType | true
    }

  export interface QuestionSolutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionSolution'], meta: { name: 'QuestionSolution' } }
    /**
     * Find zero or one QuestionSolution that matches the filter.
     * @param {QuestionSolutionFindUniqueArgs} args - Arguments to find a QuestionSolution
     * @example
     * // Get one QuestionSolution
     * const questionSolution = await prisma.questionSolution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionSolutionFindUniqueArgs>(args: SelectSubset<T, QuestionSolutionFindUniqueArgs<ExtArgs>>): Prisma__QuestionSolutionClient<$Result.GetResult<Prisma.$QuestionSolutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionSolution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionSolutionFindUniqueOrThrowArgs} args - Arguments to find a QuestionSolution
     * @example
     * // Get one QuestionSolution
     * const questionSolution = await prisma.questionSolution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionSolutionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionSolutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionSolutionClient<$Result.GetResult<Prisma.$QuestionSolutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionSolution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionSolutionFindFirstArgs} args - Arguments to find a QuestionSolution
     * @example
     * // Get one QuestionSolution
     * const questionSolution = await prisma.questionSolution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionSolutionFindFirstArgs>(args?: SelectSubset<T, QuestionSolutionFindFirstArgs<ExtArgs>>): Prisma__QuestionSolutionClient<$Result.GetResult<Prisma.$QuestionSolutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionSolution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionSolutionFindFirstOrThrowArgs} args - Arguments to find a QuestionSolution
     * @example
     * // Get one QuestionSolution
     * const questionSolution = await prisma.questionSolution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionSolutionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionSolutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionSolutionClient<$Result.GetResult<Prisma.$QuestionSolutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionSolutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionSolutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionSolutions
     * const questionSolutions = await prisma.questionSolution.findMany()
     * 
     * // Get first 10 QuestionSolutions
     * const questionSolutions = await prisma.questionSolution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionSolutionWithIdOnly = await prisma.questionSolution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionSolutionFindManyArgs>(args?: SelectSubset<T, QuestionSolutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionSolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionSolution.
     * @param {QuestionSolutionCreateArgs} args - Arguments to create a QuestionSolution.
     * @example
     * // Create one QuestionSolution
     * const QuestionSolution = await prisma.questionSolution.create({
     *   data: {
     *     // ... data to create a QuestionSolution
     *   }
     * })
     * 
     */
    create<T extends QuestionSolutionCreateArgs>(args: SelectSubset<T, QuestionSolutionCreateArgs<ExtArgs>>): Prisma__QuestionSolutionClient<$Result.GetResult<Prisma.$QuestionSolutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionSolutions.
     * @param {QuestionSolutionCreateManyArgs} args - Arguments to create many QuestionSolutions.
     * @example
     * // Create many QuestionSolutions
     * const questionSolution = await prisma.questionSolution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionSolutionCreateManyArgs>(args?: SelectSubset<T, QuestionSolutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionSolutions and returns the data saved in the database.
     * @param {QuestionSolutionCreateManyAndReturnArgs} args - Arguments to create many QuestionSolutions.
     * @example
     * // Create many QuestionSolutions
     * const questionSolution = await prisma.questionSolution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionSolutions and only return the `id`
     * const questionSolutionWithIdOnly = await prisma.questionSolution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionSolutionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionSolutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionSolutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionSolution.
     * @param {QuestionSolutionDeleteArgs} args - Arguments to delete one QuestionSolution.
     * @example
     * // Delete one QuestionSolution
     * const QuestionSolution = await prisma.questionSolution.delete({
     *   where: {
     *     // ... filter to delete one QuestionSolution
     *   }
     * })
     * 
     */
    delete<T extends QuestionSolutionDeleteArgs>(args: SelectSubset<T, QuestionSolutionDeleteArgs<ExtArgs>>): Prisma__QuestionSolutionClient<$Result.GetResult<Prisma.$QuestionSolutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionSolution.
     * @param {QuestionSolutionUpdateArgs} args - Arguments to update one QuestionSolution.
     * @example
     * // Update one QuestionSolution
     * const questionSolution = await prisma.questionSolution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionSolutionUpdateArgs>(args: SelectSubset<T, QuestionSolutionUpdateArgs<ExtArgs>>): Prisma__QuestionSolutionClient<$Result.GetResult<Prisma.$QuestionSolutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionSolutions.
     * @param {QuestionSolutionDeleteManyArgs} args - Arguments to filter QuestionSolutions to delete.
     * @example
     * // Delete a few QuestionSolutions
     * const { count } = await prisma.questionSolution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionSolutionDeleteManyArgs>(args?: SelectSubset<T, QuestionSolutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionSolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionSolutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionSolutions
     * const questionSolution = await prisma.questionSolution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionSolutionUpdateManyArgs>(args: SelectSubset<T, QuestionSolutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionSolutions and returns the data updated in the database.
     * @param {QuestionSolutionUpdateManyAndReturnArgs} args - Arguments to update many QuestionSolutions.
     * @example
     * // Update many QuestionSolutions
     * const questionSolution = await prisma.questionSolution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionSolutions and only return the `id`
     * const questionSolutionWithIdOnly = await prisma.questionSolution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionSolutionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionSolutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionSolutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionSolution.
     * @param {QuestionSolutionUpsertArgs} args - Arguments to update or create a QuestionSolution.
     * @example
     * // Update or create a QuestionSolution
     * const questionSolution = await prisma.questionSolution.upsert({
     *   create: {
     *     // ... data to create a QuestionSolution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionSolution we want to update
     *   }
     * })
     */
    upsert<T extends QuestionSolutionUpsertArgs>(args: SelectSubset<T, QuestionSolutionUpsertArgs<ExtArgs>>): Prisma__QuestionSolutionClient<$Result.GetResult<Prisma.$QuestionSolutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionSolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionSolutionCountArgs} args - Arguments to filter QuestionSolutions to count.
     * @example
     * // Count the number of QuestionSolutions
     * const count = await prisma.questionSolution.count({
     *   where: {
     *     // ... the filter for the QuestionSolutions we want to count
     *   }
     * })
    **/
    count<T extends QuestionSolutionCountArgs>(
      args?: Subset<T, QuestionSolutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionSolutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionSolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionSolutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionSolutionAggregateArgs>(args: Subset<T, QuestionSolutionAggregateArgs>): Prisma.PrismaPromise<GetQuestionSolutionAggregateType<T>>

    /**
     * Group by QuestionSolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionSolutionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionSolutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionSolutionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionSolutionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionSolutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionSolutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionSolution model
   */
  readonly fields: QuestionSolutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionSolution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionSolutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuestionSolution model
   */
  interface QuestionSolutionFieldRefs {
    readonly id: FieldRef<"QuestionSolution", 'String'>
    readonly userId: FieldRef<"QuestionSolution", 'String'>
    readonly imageUrl: FieldRef<"QuestionSolution", 'String'>
    readonly ocrText: FieldRef<"QuestionSolution", 'String'>
    readonly solution: FieldRef<"QuestionSolution", 'String'>
    readonly lesson: FieldRef<"QuestionSolution", 'String'>
    readonly createdAt: FieldRef<"QuestionSolution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuestionSolution findUnique
   */
  export type QuestionSolutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSolution
     */
    select?: QuestionSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSolution
     */
    omit?: QuestionSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSolutionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionSolution to fetch.
     */
    where: QuestionSolutionWhereUniqueInput
  }

  /**
   * QuestionSolution findUniqueOrThrow
   */
  export type QuestionSolutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSolution
     */
    select?: QuestionSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSolution
     */
    omit?: QuestionSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSolutionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionSolution to fetch.
     */
    where: QuestionSolutionWhereUniqueInput
  }

  /**
   * QuestionSolution findFirst
   */
  export type QuestionSolutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSolution
     */
    select?: QuestionSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSolution
     */
    omit?: QuestionSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSolutionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionSolution to fetch.
     */
    where?: QuestionSolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionSolutions to fetch.
     */
    orderBy?: QuestionSolutionOrderByWithRelationInput | QuestionSolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionSolutions.
     */
    cursor?: QuestionSolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionSolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionSolutions.
     */
    distinct?: QuestionSolutionScalarFieldEnum | QuestionSolutionScalarFieldEnum[]
  }

  /**
   * QuestionSolution findFirstOrThrow
   */
  export type QuestionSolutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSolution
     */
    select?: QuestionSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSolution
     */
    omit?: QuestionSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSolutionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionSolution to fetch.
     */
    where?: QuestionSolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionSolutions to fetch.
     */
    orderBy?: QuestionSolutionOrderByWithRelationInput | QuestionSolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionSolutions.
     */
    cursor?: QuestionSolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionSolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionSolutions.
     */
    distinct?: QuestionSolutionScalarFieldEnum | QuestionSolutionScalarFieldEnum[]
  }

  /**
   * QuestionSolution findMany
   */
  export type QuestionSolutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSolution
     */
    select?: QuestionSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSolution
     */
    omit?: QuestionSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSolutionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionSolutions to fetch.
     */
    where?: QuestionSolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionSolutions to fetch.
     */
    orderBy?: QuestionSolutionOrderByWithRelationInput | QuestionSolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionSolutions.
     */
    cursor?: QuestionSolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionSolutions.
     */
    skip?: number
    distinct?: QuestionSolutionScalarFieldEnum | QuestionSolutionScalarFieldEnum[]
  }

  /**
   * QuestionSolution create
   */
  export type QuestionSolutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSolution
     */
    select?: QuestionSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSolution
     */
    omit?: QuestionSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSolutionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionSolution.
     */
    data: XOR<QuestionSolutionCreateInput, QuestionSolutionUncheckedCreateInput>
  }

  /**
   * QuestionSolution createMany
   */
  export type QuestionSolutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionSolutions.
     */
    data: QuestionSolutionCreateManyInput | QuestionSolutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionSolution createManyAndReturn
   */
  export type QuestionSolutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSolution
     */
    select?: QuestionSolutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSolution
     */
    omit?: QuestionSolutionOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionSolutions.
     */
    data: QuestionSolutionCreateManyInput | QuestionSolutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSolutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionSolution update
   */
  export type QuestionSolutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSolution
     */
    select?: QuestionSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSolution
     */
    omit?: QuestionSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSolutionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionSolution.
     */
    data: XOR<QuestionSolutionUpdateInput, QuestionSolutionUncheckedUpdateInput>
    /**
     * Choose, which QuestionSolution to update.
     */
    where: QuestionSolutionWhereUniqueInput
  }

  /**
   * QuestionSolution updateMany
   */
  export type QuestionSolutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionSolutions.
     */
    data: XOR<QuestionSolutionUpdateManyMutationInput, QuestionSolutionUncheckedUpdateManyInput>
    /**
     * Filter which QuestionSolutions to update
     */
    where?: QuestionSolutionWhereInput
    /**
     * Limit how many QuestionSolutions to update.
     */
    limit?: number
  }

  /**
   * QuestionSolution updateManyAndReturn
   */
  export type QuestionSolutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSolution
     */
    select?: QuestionSolutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSolution
     */
    omit?: QuestionSolutionOmit<ExtArgs> | null
    /**
     * The data used to update QuestionSolutions.
     */
    data: XOR<QuestionSolutionUpdateManyMutationInput, QuestionSolutionUncheckedUpdateManyInput>
    /**
     * Filter which QuestionSolutions to update
     */
    where?: QuestionSolutionWhereInput
    /**
     * Limit how many QuestionSolutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSolutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionSolution upsert
   */
  export type QuestionSolutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSolution
     */
    select?: QuestionSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSolution
     */
    omit?: QuestionSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSolutionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionSolution to update in case it exists.
     */
    where: QuestionSolutionWhereUniqueInput
    /**
     * In case the QuestionSolution found by the `where` argument doesn't exist, create a new QuestionSolution with this data.
     */
    create: XOR<QuestionSolutionCreateInput, QuestionSolutionUncheckedCreateInput>
    /**
     * In case the QuestionSolution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionSolutionUpdateInput, QuestionSolutionUncheckedUpdateInput>
  }

  /**
   * QuestionSolution delete
   */
  export type QuestionSolutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSolution
     */
    select?: QuestionSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSolution
     */
    omit?: QuestionSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSolutionInclude<ExtArgs> | null
    /**
     * Filter which QuestionSolution to delete.
     */
    where: QuestionSolutionWhereUniqueInput
  }

  /**
   * QuestionSolution deleteMany
   */
  export type QuestionSolutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionSolutions to delete
     */
    where?: QuestionSolutionWhereInput
    /**
     * Limit how many QuestionSolutions to delete.
     */
    limit?: number
  }

  /**
   * QuestionSolution without action
   */
  export type QuestionSolutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSolution
     */
    select?: QuestionSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSolution
     */
    omit?: QuestionSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSolutionInclude<ExtArgs> | null
  }


  /**
   * Model ExamResult
   */

  export type AggregateExamResult = {
    _count: ExamResultCountAggregateOutputType | null
    _avg: ExamResultAvgAggregateOutputType | null
    _sum: ExamResultSumAggregateOutputType | null
    _min: ExamResultMinAggregateOutputType | null
    _max: ExamResultMaxAggregateOutputType | null
  }

  export type ExamResultAvgAggregateOutputType = {
    score: number | null
  }

  export type ExamResultSumAggregateOutputType = {
    score: number | null
  }

  export type ExamResultMinAggregateOutputType = {
    id: string | null
    userId: string | null
    examType: $Enums.ExamType | null
    name: string | null
    date: Date | null
    score: number | null
  }

  export type ExamResultMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    examType: $Enums.ExamType | null
    name: string | null
    date: Date | null
    score: number | null
  }

  export type ExamResultCountAggregateOutputType = {
    id: number
    userId: number
    examType: number
    name: number
    date: number
    score: number
    _all: number
  }


  export type ExamResultAvgAggregateInputType = {
    score?: true
  }

  export type ExamResultSumAggregateInputType = {
    score?: true
  }

  export type ExamResultMinAggregateInputType = {
    id?: true
    userId?: true
    examType?: true
    name?: true
    date?: true
    score?: true
  }

  export type ExamResultMaxAggregateInputType = {
    id?: true
    userId?: true
    examType?: true
    name?: true
    date?: true
    score?: true
  }

  export type ExamResultCountAggregateInputType = {
    id?: true
    userId?: true
    examType?: true
    name?: true
    date?: true
    score?: true
    _all?: true
  }

  export type ExamResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamResult to aggregate.
     */
    where?: ExamResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResults to fetch.
     */
    orderBy?: ExamResultOrderByWithRelationInput | ExamResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamResults
    **/
    _count?: true | ExamResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamResultMaxAggregateInputType
  }

  export type GetExamResultAggregateType<T extends ExamResultAggregateArgs> = {
        [P in keyof T & keyof AggregateExamResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamResult[P]>
      : GetScalarType<T[P], AggregateExamResult[P]>
  }




  export type ExamResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamResultWhereInput
    orderBy?: ExamResultOrderByWithAggregationInput | ExamResultOrderByWithAggregationInput[]
    by: ExamResultScalarFieldEnum[] | ExamResultScalarFieldEnum
    having?: ExamResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamResultCountAggregateInputType | true
    _avg?: ExamResultAvgAggregateInputType
    _sum?: ExamResultSumAggregateInputType
    _min?: ExamResultMinAggregateInputType
    _max?: ExamResultMaxAggregateInputType
  }

  export type ExamResultGroupByOutputType = {
    id: string
    userId: string
    examType: $Enums.ExamType
    name: string | null
    date: Date
    score: number | null
    _count: ExamResultCountAggregateOutputType | null
    _avg: ExamResultAvgAggregateOutputType | null
    _sum: ExamResultSumAggregateOutputType | null
    _min: ExamResultMinAggregateOutputType | null
    _max: ExamResultMaxAggregateOutputType | null
  }

  type GetExamResultGroupByPayload<T extends ExamResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamResultGroupByOutputType[P]>
            : GetScalarType<T[P], ExamResultGroupByOutputType[P]>
        }
      >
    >


  export type ExamResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    examType?: boolean
    name?: boolean
    date?: boolean
    score?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    details?: boolean | ExamResult$detailsArgs<ExtArgs>
    _count?: boolean | ExamResultCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examResult"]>

  export type ExamResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    examType?: boolean
    name?: boolean
    date?: boolean
    score?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examResult"]>

  export type ExamResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    examType?: boolean
    name?: boolean
    date?: boolean
    score?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examResult"]>

  export type ExamResultSelectScalar = {
    id?: boolean
    userId?: boolean
    examType?: boolean
    name?: boolean
    date?: boolean
    score?: boolean
  }

  export type ExamResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "examType" | "name" | "date" | "score", ExtArgs["result"]["examResult"]>
  export type ExamResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    details?: boolean | ExamResult$detailsArgs<ExtArgs>
    _count?: boolean | ExamResultCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExamResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExamResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamResult"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      details: Prisma.$ExamDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      examType: $Enums.ExamType
      name: string | null
      date: Date
      score: number | null
    }, ExtArgs["result"]["examResult"]>
    composites: {}
  }

  type ExamResultGetPayload<S extends boolean | null | undefined | ExamResultDefaultArgs> = $Result.GetResult<Prisma.$ExamResultPayload, S>

  type ExamResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamResultCountAggregateInputType | true
    }

  export interface ExamResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamResult'], meta: { name: 'ExamResult' } }
    /**
     * Find zero or one ExamResult that matches the filter.
     * @param {ExamResultFindUniqueArgs} args - Arguments to find a ExamResult
     * @example
     * // Get one ExamResult
     * const examResult = await prisma.examResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamResultFindUniqueArgs>(args: SelectSubset<T, ExamResultFindUniqueArgs<ExtArgs>>): Prisma__ExamResultClient<$Result.GetResult<Prisma.$ExamResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamResultFindUniqueOrThrowArgs} args - Arguments to find a ExamResult
     * @example
     * // Get one ExamResult
     * const examResult = await prisma.examResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamResultClient<$Result.GetResult<Prisma.$ExamResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultFindFirstArgs} args - Arguments to find a ExamResult
     * @example
     * // Get one ExamResult
     * const examResult = await prisma.examResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamResultFindFirstArgs>(args?: SelectSubset<T, ExamResultFindFirstArgs<ExtArgs>>): Prisma__ExamResultClient<$Result.GetResult<Prisma.$ExamResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultFindFirstOrThrowArgs} args - Arguments to find a ExamResult
     * @example
     * // Get one ExamResult
     * const examResult = await prisma.examResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamResultClient<$Result.GetResult<Prisma.$ExamResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamResults
     * const examResults = await prisma.examResult.findMany()
     * 
     * // Get first 10 ExamResults
     * const examResults = await prisma.examResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examResultWithIdOnly = await prisma.examResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamResultFindManyArgs>(args?: SelectSubset<T, ExamResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamResult.
     * @param {ExamResultCreateArgs} args - Arguments to create a ExamResult.
     * @example
     * // Create one ExamResult
     * const ExamResult = await prisma.examResult.create({
     *   data: {
     *     // ... data to create a ExamResult
     *   }
     * })
     * 
     */
    create<T extends ExamResultCreateArgs>(args: SelectSubset<T, ExamResultCreateArgs<ExtArgs>>): Prisma__ExamResultClient<$Result.GetResult<Prisma.$ExamResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamResults.
     * @param {ExamResultCreateManyArgs} args - Arguments to create many ExamResults.
     * @example
     * // Create many ExamResults
     * const examResult = await prisma.examResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamResultCreateManyArgs>(args?: SelectSubset<T, ExamResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamResults and returns the data saved in the database.
     * @param {ExamResultCreateManyAndReturnArgs} args - Arguments to create many ExamResults.
     * @example
     * // Create many ExamResults
     * const examResult = await prisma.examResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamResults and only return the `id`
     * const examResultWithIdOnly = await prisma.examResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamResult.
     * @param {ExamResultDeleteArgs} args - Arguments to delete one ExamResult.
     * @example
     * // Delete one ExamResult
     * const ExamResult = await prisma.examResult.delete({
     *   where: {
     *     // ... filter to delete one ExamResult
     *   }
     * })
     * 
     */
    delete<T extends ExamResultDeleteArgs>(args: SelectSubset<T, ExamResultDeleteArgs<ExtArgs>>): Prisma__ExamResultClient<$Result.GetResult<Prisma.$ExamResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamResult.
     * @param {ExamResultUpdateArgs} args - Arguments to update one ExamResult.
     * @example
     * // Update one ExamResult
     * const examResult = await prisma.examResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamResultUpdateArgs>(args: SelectSubset<T, ExamResultUpdateArgs<ExtArgs>>): Prisma__ExamResultClient<$Result.GetResult<Prisma.$ExamResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamResults.
     * @param {ExamResultDeleteManyArgs} args - Arguments to filter ExamResults to delete.
     * @example
     * // Delete a few ExamResults
     * const { count } = await prisma.examResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamResultDeleteManyArgs>(args?: SelectSubset<T, ExamResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamResults
     * const examResult = await prisma.examResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamResultUpdateManyArgs>(args: SelectSubset<T, ExamResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamResults and returns the data updated in the database.
     * @param {ExamResultUpdateManyAndReturnArgs} args - Arguments to update many ExamResults.
     * @example
     * // Update many ExamResults
     * const examResult = await prisma.examResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamResults and only return the `id`
     * const examResultWithIdOnly = await prisma.examResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExamResultUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamResult.
     * @param {ExamResultUpsertArgs} args - Arguments to update or create a ExamResult.
     * @example
     * // Update or create a ExamResult
     * const examResult = await prisma.examResult.upsert({
     *   create: {
     *     // ... data to create a ExamResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamResult we want to update
     *   }
     * })
     */
    upsert<T extends ExamResultUpsertArgs>(args: SelectSubset<T, ExamResultUpsertArgs<ExtArgs>>): Prisma__ExamResultClient<$Result.GetResult<Prisma.$ExamResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultCountArgs} args - Arguments to filter ExamResults to count.
     * @example
     * // Count the number of ExamResults
     * const count = await prisma.examResult.count({
     *   where: {
     *     // ... the filter for the ExamResults we want to count
     *   }
     * })
    **/
    count<T extends ExamResultCountArgs>(
      args?: Subset<T, ExamResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamResultAggregateArgs>(args: Subset<T, ExamResultAggregateArgs>): Prisma.PrismaPromise<GetExamResultAggregateType<T>>

    /**
     * Group by ExamResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamResultGroupByArgs['orderBy'] }
        : { orderBy?: ExamResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamResult model
   */
  readonly fields: ExamResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    details<T extends ExamResult$detailsArgs<ExtArgs> = {}>(args?: Subset<T, ExamResult$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExamResult model
   */
  interface ExamResultFieldRefs {
    readonly id: FieldRef<"ExamResult", 'String'>
    readonly userId: FieldRef<"ExamResult", 'String'>
    readonly examType: FieldRef<"ExamResult", 'ExamType'>
    readonly name: FieldRef<"ExamResult", 'String'>
    readonly date: FieldRef<"ExamResult", 'DateTime'>
    readonly score: FieldRef<"ExamResult", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ExamResult findUnique
   */
  export type ExamResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResult
     */
    omit?: ExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * Filter, which ExamResult to fetch.
     */
    where: ExamResultWhereUniqueInput
  }

  /**
   * ExamResult findUniqueOrThrow
   */
  export type ExamResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResult
     */
    omit?: ExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * Filter, which ExamResult to fetch.
     */
    where: ExamResultWhereUniqueInput
  }

  /**
   * ExamResult findFirst
   */
  export type ExamResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResult
     */
    omit?: ExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * Filter, which ExamResult to fetch.
     */
    where?: ExamResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResults to fetch.
     */
    orderBy?: ExamResultOrderByWithRelationInput | ExamResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamResults.
     */
    cursor?: ExamResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamResults.
     */
    distinct?: ExamResultScalarFieldEnum | ExamResultScalarFieldEnum[]
  }

  /**
   * ExamResult findFirstOrThrow
   */
  export type ExamResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResult
     */
    omit?: ExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * Filter, which ExamResult to fetch.
     */
    where?: ExamResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResults to fetch.
     */
    orderBy?: ExamResultOrderByWithRelationInput | ExamResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamResults.
     */
    cursor?: ExamResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamResults.
     */
    distinct?: ExamResultScalarFieldEnum | ExamResultScalarFieldEnum[]
  }

  /**
   * ExamResult findMany
   */
  export type ExamResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResult
     */
    omit?: ExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * Filter, which ExamResults to fetch.
     */
    where?: ExamResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResults to fetch.
     */
    orderBy?: ExamResultOrderByWithRelationInput | ExamResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamResults.
     */
    cursor?: ExamResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResults.
     */
    skip?: number
    distinct?: ExamResultScalarFieldEnum | ExamResultScalarFieldEnum[]
  }

  /**
   * ExamResult create
   */
  export type ExamResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResult
     */
    omit?: ExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamResult.
     */
    data: XOR<ExamResultCreateInput, ExamResultUncheckedCreateInput>
  }

  /**
   * ExamResult createMany
   */
  export type ExamResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamResults.
     */
    data: ExamResultCreateManyInput | ExamResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamResult createManyAndReturn
   */
  export type ExamResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResult
     */
    omit?: ExamResultOmit<ExtArgs> | null
    /**
     * The data used to create many ExamResults.
     */
    data: ExamResultCreateManyInput | ExamResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamResult update
   */
  export type ExamResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResult
     */
    omit?: ExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamResult.
     */
    data: XOR<ExamResultUpdateInput, ExamResultUncheckedUpdateInput>
    /**
     * Choose, which ExamResult to update.
     */
    where: ExamResultWhereUniqueInput
  }

  /**
   * ExamResult updateMany
   */
  export type ExamResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamResults.
     */
    data: XOR<ExamResultUpdateManyMutationInput, ExamResultUncheckedUpdateManyInput>
    /**
     * Filter which ExamResults to update
     */
    where?: ExamResultWhereInput
    /**
     * Limit how many ExamResults to update.
     */
    limit?: number
  }

  /**
   * ExamResult updateManyAndReturn
   */
  export type ExamResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResult
     */
    omit?: ExamResultOmit<ExtArgs> | null
    /**
     * The data used to update ExamResults.
     */
    data: XOR<ExamResultUpdateManyMutationInput, ExamResultUncheckedUpdateManyInput>
    /**
     * Filter which ExamResults to update
     */
    where?: ExamResultWhereInput
    /**
     * Limit how many ExamResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamResult upsert
   */
  export type ExamResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResult
     */
    omit?: ExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamResult to update in case it exists.
     */
    where: ExamResultWhereUniqueInput
    /**
     * In case the ExamResult found by the `where` argument doesn't exist, create a new ExamResult with this data.
     */
    create: XOR<ExamResultCreateInput, ExamResultUncheckedCreateInput>
    /**
     * In case the ExamResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamResultUpdateInput, ExamResultUncheckedUpdateInput>
  }

  /**
   * ExamResult delete
   */
  export type ExamResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResult
     */
    omit?: ExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * Filter which ExamResult to delete.
     */
    where: ExamResultWhereUniqueInput
  }

  /**
   * ExamResult deleteMany
   */
  export type ExamResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamResults to delete
     */
    where?: ExamResultWhereInput
    /**
     * Limit how many ExamResults to delete.
     */
    limit?: number
  }

  /**
   * ExamResult.details
   */
  export type ExamResult$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamDetail
     */
    select?: ExamDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamDetail
     */
    omit?: ExamDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamDetailInclude<ExtArgs> | null
    where?: ExamDetailWhereInput
    orderBy?: ExamDetailOrderByWithRelationInput | ExamDetailOrderByWithRelationInput[]
    cursor?: ExamDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamDetailScalarFieldEnum | ExamDetailScalarFieldEnum[]
  }

  /**
   * ExamResult without action
   */
  export type ExamResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResult
     */
    omit?: ExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamResultInclude<ExtArgs> | null
  }


  /**
   * Model ExamDetail
   */

  export type AggregateExamDetail = {
    _count: ExamDetailCountAggregateOutputType | null
    _avg: ExamDetailAvgAggregateOutputType | null
    _sum: ExamDetailSumAggregateOutputType | null
    _min: ExamDetailMinAggregateOutputType | null
    _max: ExamDetailMaxAggregateOutputType | null
  }

  export type ExamDetailAvgAggregateOutputType = {
    correct: number | null
    incorrect: number | null
    empty: number | null
    net: number | null
  }

  export type ExamDetailSumAggregateOutputType = {
    correct: number | null
    incorrect: number | null
    empty: number | null
    net: number | null
  }

  export type ExamDetailMinAggregateOutputType = {
    id: string | null
    examResultId: string | null
    lesson: string | null
    topic: string | null
    correct: number | null
    incorrect: number | null
    empty: number | null
    net: number | null
  }

  export type ExamDetailMaxAggregateOutputType = {
    id: string | null
    examResultId: string | null
    lesson: string | null
    topic: string | null
    correct: number | null
    incorrect: number | null
    empty: number | null
    net: number | null
  }

  export type ExamDetailCountAggregateOutputType = {
    id: number
    examResultId: number
    lesson: number
    topic: number
    correct: number
    incorrect: number
    empty: number
    net: number
    _all: number
  }


  export type ExamDetailAvgAggregateInputType = {
    correct?: true
    incorrect?: true
    empty?: true
    net?: true
  }

  export type ExamDetailSumAggregateInputType = {
    correct?: true
    incorrect?: true
    empty?: true
    net?: true
  }

  export type ExamDetailMinAggregateInputType = {
    id?: true
    examResultId?: true
    lesson?: true
    topic?: true
    correct?: true
    incorrect?: true
    empty?: true
    net?: true
  }

  export type ExamDetailMaxAggregateInputType = {
    id?: true
    examResultId?: true
    lesson?: true
    topic?: true
    correct?: true
    incorrect?: true
    empty?: true
    net?: true
  }

  export type ExamDetailCountAggregateInputType = {
    id?: true
    examResultId?: true
    lesson?: true
    topic?: true
    correct?: true
    incorrect?: true
    empty?: true
    net?: true
    _all?: true
  }

  export type ExamDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamDetail to aggregate.
     */
    where?: ExamDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamDetails to fetch.
     */
    orderBy?: ExamDetailOrderByWithRelationInput | ExamDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamDetails
    **/
    _count?: true | ExamDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamDetailMaxAggregateInputType
  }

  export type GetExamDetailAggregateType<T extends ExamDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateExamDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamDetail[P]>
      : GetScalarType<T[P], AggregateExamDetail[P]>
  }




  export type ExamDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamDetailWhereInput
    orderBy?: ExamDetailOrderByWithAggregationInput | ExamDetailOrderByWithAggregationInput[]
    by: ExamDetailScalarFieldEnum[] | ExamDetailScalarFieldEnum
    having?: ExamDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamDetailCountAggregateInputType | true
    _avg?: ExamDetailAvgAggregateInputType
    _sum?: ExamDetailSumAggregateInputType
    _min?: ExamDetailMinAggregateInputType
    _max?: ExamDetailMaxAggregateInputType
  }

  export type ExamDetailGroupByOutputType = {
    id: string
    examResultId: string
    lesson: string
    topic: string | null
    correct: number
    incorrect: number
    empty: number
    net: number
    _count: ExamDetailCountAggregateOutputType | null
    _avg: ExamDetailAvgAggregateOutputType | null
    _sum: ExamDetailSumAggregateOutputType | null
    _min: ExamDetailMinAggregateOutputType | null
    _max: ExamDetailMaxAggregateOutputType | null
  }

  type GetExamDetailGroupByPayload<T extends ExamDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ExamDetailGroupByOutputType[P]>
        }
      >
    >


  export type ExamDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examResultId?: boolean
    lesson?: boolean
    topic?: boolean
    correct?: boolean
    incorrect?: boolean
    empty?: boolean
    net?: boolean
    examResult?: boolean | ExamResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examDetail"]>

  export type ExamDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examResultId?: boolean
    lesson?: boolean
    topic?: boolean
    correct?: boolean
    incorrect?: boolean
    empty?: boolean
    net?: boolean
    examResult?: boolean | ExamResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examDetail"]>

  export type ExamDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examResultId?: boolean
    lesson?: boolean
    topic?: boolean
    correct?: boolean
    incorrect?: boolean
    empty?: boolean
    net?: boolean
    examResult?: boolean | ExamResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examDetail"]>

  export type ExamDetailSelectScalar = {
    id?: boolean
    examResultId?: boolean
    lesson?: boolean
    topic?: boolean
    correct?: boolean
    incorrect?: boolean
    empty?: boolean
    net?: boolean
  }

  export type ExamDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "examResultId" | "lesson" | "topic" | "correct" | "incorrect" | "empty" | "net", ExtArgs["result"]["examDetail"]>
  export type ExamDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examResult?: boolean | ExamResultDefaultArgs<ExtArgs>
  }
  export type ExamDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examResult?: boolean | ExamResultDefaultArgs<ExtArgs>
  }
  export type ExamDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examResult?: boolean | ExamResultDefaultArgs<ExtArgs>
  }

  export type $ExamDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamDetail"
    objects: {
      examResult: Prisma.$ExamResultPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      examResultId: string
      lesson: string
      topic: string | null
      correct: number
      incorrect: number
      empty: number
      net: number
    }, ExtArgs["result"]["examDetail"]>
    composites: {}
  }

  type ExamDetailGetPayload<S extends boolean | null | undefined | ExamDetailDefaultArgs> = $Result.GetResult<Prisma.$ExamDetailPayload, S>

  type ExamDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamDetailCountAggregateInputType | true
    }

  export interface ExamDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamDetail'], meta: { name: 'ExamDetail' } }
    /**
     * Find zero or one ExamDetail that matches the filter.
     * @param {ExamDetailFindUniqueArgs} args - Arguments to find a ExamDetail
     * @example
     * // Get one ExamDetail
     * const examDetail = await prisma.examDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamDetailFindUniqueArgs>(args: SelectSubset<T, ExamDetailFindUniqueArgs<ExtArgs>>): Prisma__ExamDetailClient<$Result.GetResult<Prisma.$ExamDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamDetailFindUniqueOrThrowArgs} args - Arguments to find a ExamDetail
     * @example
     * // Get one ExamDetail
     * const examDetail = await prisma.examDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamDetailClient<$Result.GetResult<Prisma.$ExamDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamDetailFindFirstArgs} args - Arguments to find a ExamDetail
     * @example
     * // Get one ExamDetail
     * const examDetail = await prisma.examDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamDetailFindFirstArgs>(args?: SelectSubset<T, ExamDetailFindFirstArgs<ExtArgs>>): Prisma__ExamDetailClient<$Result.GetResult<Prisma.$ExamDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamDetailFindFirstOrThrowArgs} args - Arguments to find a ExamDetail
     * @example
     * // Get one ExamDetail
     * const examDetail = await prisma.examDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamDetailClient<$Result.GetResult<Prisma.$ExamDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamDetails
     * const examDetails = await prisma.examDetail.findMany()
     * 
     * // Get first 10 ExamDetails
     * const examDetails = await prisma.examDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examDetailWithIdOnly = await prisma.examDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamDetailFindManyArgs>(args?: SelectSubset<T, ExamDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamDetail.
     * @param {ExamDetailCreateArgs} args - Arguments to create a ExamDetail.
     * @example
     * // Create one ExamDetail
     * const ExamDetail = await prisma.examDetail.create({
     *   data: {
     *     // ... data to create a ExamDetail
     *   }
     * })
     * 
     */
    create<T extends ExamDetailCreateArgs>(args: SelectSubset<T, ExamDetailCreateArgs<ExtArgs>>): Prisma__ExamDetailClient<$Result.GetResult<Prisma.$ExamDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamDetails.
     * @param {ExamDetailCreateManyArgs} args - Arguments to create many ExamDetails.
     * @example
     * // Create many ExamDetails
     * const examDetail = await prisma.examDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamDetailCreateManyArgs>(args?: SelectSubset<T, ExamDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamDetails and returns the data saved in the database.
     * @param {ExamDetailCreateManyAndReturnArgs} args - Arguments to create many ExamDetails.
     * @example
     * // Create many ExamDetails
     * const examDetail = await prisma.examDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamDetails and only return the `id`
     * const examDetailWithIdOnly = await prisma.examDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamDetail.
     * @param {ExamDetailDeleteArgs} args - Arguments to delete one ExamDetail.
     * @example
     * // Delete one ExamDetail
     * const ExamDetail = await prisma.examDetail.delete({
     *   where: {
     *     // ... filter to delete one ExamDetail
     *   }
     * })
     * 
     */
    delete<T extends ExamDetailDeleteArgs>(args: SelectSubset<T, ExamDetailDeleteArgs<ExtArgs>>): Prisma__ExamDetailClient<$Result.GetResult<Prisma.$ExamDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamDetail.
     * @param {ExamDetailUpdateArgs} args - Arguments to update one ExamDetail.
     * @example
     * // Update one ExamDetail
     * const examDetail = await prisma.examDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamDetailUpdateArgs>(args: SelectSubset<T, ExamDetailUpdateArgs<ExtArgs>>): Prisma__ExamDetailClient<$Result.GetResult<Prisma.$ExamDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamDetails.
     * @param {ExamDetailDeleteManyArgs} args - Arguments to filter ExamDetails to delete.
     * @example
     * // Delete a few ExamDetails
     * const { count } = await prisma.examDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamDetailDeleteManyArgs>(args?: SelectSubset<T, ExamDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamDetails
     * const examDetail = await prisma.examDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamDetailUpdateManyArgs>(args: SelectSubset<T, ExamDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamDetails and returns the data updated in the database.
     * @param {ExamDetailUpdateManyAndReturnArgs} args - Arguments to update many ExamDetails.
     * @example
     * // Update many ExamDetails
     * const examDetail = await prisma.examDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamDetails and only return the `id`
     * const examDetailWithIdOnly = await prisma.examDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExamDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamDetail.
     * @param {ExamDetailUpsertArgs} args - Arguments to update or create a ExamDetail.
     * @example
     * // Update or create a ExamDetail
     * const examDetail = await prisma.examDetail.upsert({
     *   create: {
     *     // ... data to create a ExamDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamDetail we want to update
     *   }
     * })
     */
    upsert<T extends ExamDetailUpsertArgs>(args: SelectSubset<T, ExamDetailUpsertArgs<ExtArgs>>): Prisma__ExamDetailClient<$Result.GetResult<Prisma.$ExamDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamDetailCountArgs} args - Arguments to filter ExamDetails to count.
     * @example
     * // Count the number of ExamDetails
     * const count = await prisma.examDetail.count({
     *   where: {
     *     // ... the filter for the ExamDetails we want to count
     *   }
     * })
    **/
    count<T extends ExamDetailCountArgs>(
      args?: Subset<T, ExamDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamDetailAggregateArgs>(args: Subset<T, ExamDetailAggregateArgs>): Prisma.PrismaPromise<GetExamDetailAggregateType<T>>

    /**
     * Group by ExamDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamDetailGroupByArgs['orderBy'] }
        : { orderBy?: ExamDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamDetail model
   */
  readonly fields: ExamDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examResult<T extends ExamResultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamResultDefaultArgs<ExtArgs>>): Prisma__ExamResultClient<$Result.GetResult<Prisma.$ExamResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExamDetail model
   */
  interface ExamDetailFieldRefs {
    readonly id: FieldRef<"ExamDetail", 'String'>
    readonly examResultId: FieldRef<"ExamDetail", 'String'>
    readonly lesson: FieldRef<"ExamDetail", 'String'>
    readonly topic: FieldRef<"ExamDetail", 'String'>
    readonly correct: FieldRef<"ExamDetail", 'Int'>
    readonly incorrect: FieldRef<"ExamDetail", 'Int'>
    readonly empty: FieldRef<"ExamDetail", 'Int'>
    readonly net: FieldRef<"ExamDetail", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ExamDetail findUnique
   */
  export type ExamDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamDetail
     */
    select?: ExamDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamDetail
     */
    omit?: ExamDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamDetailInclude<ExtArgs> | null
    /**
     * Filter, which ExamDetail to fetch.
     */
    where: ExamDetailWhereUniqueInput
  }

  /**
   * ExamDetail findUniqueOrThrow
   */
  export type ExamDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamDetail
     */
    select?: ExamDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamDetail
     */
    omit?: ExamDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamDetailInclude<ExtArgs> | null
    /**
     * Filter, which ExamDetail to fetch.
     */
    where: ExamDetailWhereUniqueInput
  }

  /**
   * ExamDetail findFirst
   */
  export type ExamDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamDetail
     */
    select?: ExamDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamDetail
     */
    omit?: ExamDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamDetailInclude<ExtArgs> | null
    /**
     * Filter, which ExamDetail to fetch.
     */
    where?: ExamDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamDetails to fetch.
     */
    orderBy?: ExamDetailOrderByWithRelationInput | ExamDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamDetails.
     */
    cursor?: ExamDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamDetails.
     */
    distinct?: ExamDetailScalarFieldEnum | ExamDetailScalarFieldEnum[]
  }

  /**
   * ExamDetail findFirstOrThrow
   */
  export type ExamDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamDetail
     */
    select?: ExamDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamDetail
     */
    omit?: ExamDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamDetailInclude<ExtArgs> | null
    /**
     * Filter, which ExamDetail to fetch.
     */
    where?: ExamDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamDetails to fetch.
     */
    orderBy?: ExamDetailOrderByWithRelationInput | ExamDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamDetails.
     */
    cursor?: ExamDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamDetails.
     */
    distinct?: ExamDetailScalarFieldEnum | ExamDetailScalarFieldEnum[]
  }

  /**
   * ExamDetail findMany
   */
  export type ExamDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamDetail
     */
    select?: ExamDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamDetail
     */
    omit?: ExamDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamDetailInclude<ExtArgs> | null
    /**
     * Filter, which ExamDetails to fetch.
     */
    where?: ExamDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamDetails to fetch.
     */
    orderBy?: ExamDetailOrderByWithRelationInput | ExamDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamDetails.
     */
    cursor?: ExamDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamDetails.
     */
    skip?: number
    distinct?: ExamDetailScalarFieldEnum | ExamDetailScalarFieldEnum[]
  }

  /**
   * ExamDetail create
   */
  export type ExamDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamDetail
     */
    select?: ExamDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamDetail
     */
    omit?: ExamDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamDetail.
     */
    data: XOR<ExamDetailCreateInput, ExamDetailUncheckedCreateInput>
  }

  /**
   * ExamDetail createMany
   */
  export type ExamDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamDetails.
     */
    data: ExamDetailCreateManyInput | ExamDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamDetail createManyAndReturn
   */
  export type ExamDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamDetail
     */
    select?: ExamDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamDetail
     */
    omit?: ExamDetailOmit<ExtArgs> | null
    /**
     * The data used to create many ExamDetails.
     */
    data: ExamDetailCreateManyInput | ExamDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamDetail update
   */
  export type ExamDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamDetail
     */
    select?: ExamDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamDetail
     */
    omit?: ExamDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamDetail.
     */
    data: XOR<ExamDetailUpdateInput, ExamDetailUncheckedUpdateInput>
    /**
     * Choose, which ExamDetail to update.
     */
    where: ExamDetailWhereUniqueInput
  }

  /**
   * ExamDetail updateMany
   */
  export type ExamDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamDetails.
     */
    data: XOR<ExamDetailUpdateManyMutationInput, ExamDetailUncheckedUpdateManyInput>
    /**
     * Filter which ExamDetails to update
     */
    where?: ExamDetailWhereInput
    /**
     * Limit how many ExamDetails to update.
     */
    limit?: number
  }

  /**
   * ExamDetail updateManyAndReturn
   */
  export type ExamDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamDetail
     */
    select?: ExamDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamDetail
     */
    omit?: ExamDetailOmit<ExtArgs> | null
    /**
     * The data used to update ExamDetails.
     */
    data: XOR<ExamDetailUpdateManyMutationInput, ExamDetailUncheckedUpdateManyInput>
    /**
     * Filter which ExamDetails to update
     */
    where?: ExamDetailWhereInput
    /**
     * Limit how many ExamDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamDetail upsert
   */
  export type ExamDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamDetail
     */
    select?: ExamDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamDetail
     */
    omit?: ExamDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamDetail to update in case it exists.
     */
    where: ExamDetailWhereUniqueInput
    /**
     * In case the ExamDetail found by the `where` argument doesn't exist, create a new ExamDetail with this data.
     */
    create: XOR<ExamDetailCreateInput, ExamDetailUncheckedCreateInput>
    /**
     * In case the ExamDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamDetailUpdateInput, ExamDetailUncheckedUpdateInput>
  }

  /**
   * ExamDetail delete
   */
  export type ExamDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamDetail
     */
    select?: ExamDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamDetail
     */
    omit?: ExamDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamDetailInclude<ExtArgs> | null
    /**
     * Filter which ExamDetail to delete.
     */
    where: ExamDetailWhereUniqueInput
  }

  /**
   * ExamDetail deleteMany
   */
  export type ExamDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamDetails to delete
     */
    where?: ExamDetailWhereInput
    /**
     * Limit how many ExamDetails to delete.
     */
    limit?: number
  }

  /**
   * ExamDetail without action
   */
  export type ExamDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamDetail
     */
    select?: ExamDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamDetail
     */
    omit?: ExamDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamDetailInclude<ExtArgs> | null
  }


  /**
   * Model StudyPlan
   */

  export type AggregateStudyPlan = {
    _count: StudyPlanCountAggregateOutputType | null
    _min: StudyPlanMinAggregateOutputType | null
    _max: StudyPlanMaxAggregateOutputType | null
  }

  export type StudyPlanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    startDate: Date | null
    endDate: Date | null
    content: string | null
    status: string | null
    createdAt: Date | null
  }

  export type StudyPlanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    startDate: Date | null
    endDate: Date | null
    content: string | null
    status: string | null
    createdAt: Date | null
  }

  export type StudyPlanCountAggregateOutputType = {
    id: number
    userId: number
    startDate: number
    endDate: number
    content: number
    status: number
    createdAt: number
    _all: number
  }


  export type StudyPlanMinAggregateInputType = {
    id?: true
    userId?: true
    startDate?: true
    endDate?: true
    content?: true
    status?: true
    createdAt?: true
  }

  export type StudyPlanMaxAggregateInputType = {
    id?: true
    userId?: true
    startDate?: true
    endDate?: true
    content?: true
    status?: true
    createdAt?: true
  }

  export type StudyPlanCountAggregateInputType = {
    id?: true
    userId?: true
    startDate?: true
    endDate?: true
    content?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type StudyPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyPlan to aggregate.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudyPlans
    **/
    _count?: true | StudyPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyPlanMaxAggregateInputType
  }

  export type GetStudyPlanAggregateType<T extends StudyPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateStudyPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudyPlan[P]>
      : GetScalarType<T[P], AggregateStudyPlan[P]>
  }




  export type StudyPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyPlanWhereInput
    orderBy?: StudyPlanOrderByWithAggregationInput | StudyPlanOrderByWithAggregationInput[]
    by: StudyPlanScalarFieldEnum[] | StudyPlanScalarFieldEnum
    having?: StudyPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyPlanCountAggregateInputType | true
    _min?: StudyPlanMinAggregateInputType
    _max?: StudyPlanMaxAggregateInputType
  }

  export type StudyPlanGroupByOutputType = {
    id: string
    userId: string
    startDate: Date
    endDate: Date
    content: string
    status: string
    createdAt: Date
    _count: StudyPlanCountAggregateOutputType | null
    _min: StudyPlanMinAggregateOutputType | null
    _max: StudyPlanMaxAggregateOutputType | null
  }

  type GetStudyPlanGroupByPayload<T extends StudyPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudyPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyPlanGroupByOutputType[P]>
            : GetScalarType<T[P], StudyPlanGroupByOutputType[P]>
        }
      >
    >


  export type StudyPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    content?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyPlan"]>

  export type StudyPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    content?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyPlan"]>

  export type StudyPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    content?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyPlan"]>

  export type StudyPlanSelectScalar = {
    id?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    content?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type StudyPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "startDate" | "endDate" | "content" | "status" | "createdAt", ExtArgs["result"]["studyPlan"]>
  export type StudyPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudyPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudyPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudyPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudyPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      startDate: Date
      endDate: Date
      content: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["studyPlan"]>
    composites: {}
  }

  type StudyPlanGetPayload<S extends boolean | null | undefined | StudyPlanDefaultArgs> = $Result.GetResult<Prisma.$StudyPlanPayload, S>

  type StudyPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudyPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudyPlanCountAggregateInputType | true
    }

  export interface StudyPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudyPlan'], meta: { name: 'StudyPlan' } }
    /**
     * Find zero or one StudyPlan that matches the filter.
     * @param {StudyPlanFindUniqueArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyPlanFindUniqueArgs>(args: SelectSubset<T, StudyPlanFindUniqueArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudyPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyPlanFindUniqueOrThrowArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, StudyPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanFindFirstArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyPlanFindFirstArgs>(args?: SelectSubset<T, StudyPlanFindFirstArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanFindFirstOrThrowArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, StudyPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudyPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudyPlans
     * const studyPlans = await prisma.studyPlan.findMany()
     * 
     * // Get first 10 StudyPlans
     * const studyPlans = await prisma.studyPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studyPlanWithIdOnly = await prisma.studyPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudyPlanFindManyArgs>(args?: SelectSubset<T, StudyPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudyPlan.
     * @param {StudyPlanCreateArgs} args - Arguments to create a StudyPlan.
     * @example
     * // Create one StudyPlan
     * const StudyPlan = await prisma.studyPlan.create({
     *   data: {
     *     // ... data to create a StudyPlan
     *   }
     * })
     * 
     */
    create<T extends StudyPlanCreateArgs>(args: SelectSubset<T, StudyPlanCreateArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudyPlans.
     * @param {StudyPlanCreateManyArgs} args - Arguments to create many StudyPlans.
     * @example
     * // Create many StudyPlans
     * const studyPlan = await prisma.studyPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudyPlanCreateManyArgs>(args?: SelectSubset<T, StudyPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudyPlans and returns the data saved in the database.
     * @param {StudyPlanCreateManyAndReturnArgs} args - Arguments to create many StudyPlans.
     * @example
     * // Create many StudyPlans
     * const studyPlan = await prisma.studyPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudyPlans and only return the `id`
     * const studyPlanWithIdOnly = await prisma.studyPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudyPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, StudyPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudyPlan.
     * @param {StudyPlanDeleteArgs} args - Arguments to delete one StudyPlan.
     * @example
     * // Delete one StudyPlan
     * const StudyPlan = await prisma.studyPlan.delete({
     *   where: {
     *     // ... filter to delete one StudyPlan
     *   }
     * })
     * 
     */
    delete<T extends StudyPlanDeleteArgs>(args: SelectSubset<T, StudyPlanDeleteArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudyPlan.
     * @param {StudyPlanUpdateArgs} args - Arguments to update one StudyPlan.
     * @example
     * // Update one StudyPlan
     * const studyPlan = await prisma.studyPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudyPlanUpdateArgs>(args: SelectSubset<T, StudyPlanUpdateArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudyPlans.
     * @param {StudyPlanDeleteManyArgs} args - Arguments to filter StudyPlans to delete.
     * @example
     * // Delete a few StudyPlans
     * const { count } = await prisma.studyPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudyPlanDeleteManyArgs>(args?: SelectSubset<T, StudyPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudyPlans
     * const studyPlan = await prisma.studyPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudyPlanUpdateManyArgs>(args: SelectSubset<T, StudyPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyPlans and returns the data updated in the database.
     * @param {StudyPlanUpdateManyAndReturnArgs} args - Arguments to update many StudyPlans.
     * @example
     * // Update many StudyPlans
     * const studyPlan = await prisma.studyPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudyPlans and only return the `id`
     * const studyPlanWithIdOnly = await prisma.studyPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudyPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, StudyPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudyPlan.
     * @param {StudyPlanUpsertArgs} args - Arguments to update or create a StudyPlan.
     * @example
     * // Update or create a StudyPlan
     * const studyPlan = await prisma.studyPlan.upsert({
     *   create: {
     *     // ... data to create a StudyPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudyPlan we want to update
     *   }
     * })
     */
    upsert<T extends StudyPlanUpsertArgs>(args: SelectSubset<T, StudyPlanUpsertArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudyPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanCountArgs} args - Arguments to filter StudyPlans to count.
     * @example
     * // Count the number of StudyPlans
     * const count = await prisma.studyPlan.count({
     *   where: {
     *     // ... the filter for the StudyPlans we want to count
     *   }
     * })
    **/
    count<T extends StudyPlanCountArgs>(
      args?: Subset<T, StudyPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudyPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudyPlanAggregateArgs>(args: Subset<T, StudyPlanAggregateArgs>): Prisma.PrismaPromise<GetStudyPlanAggregateType<T>>

    /**
     * Group by StudyPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudyPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyPlanGroupByArgs['orderBy'] }
        : { orderBy?: StudyPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudyPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudyPlan model
   */
  readonly fields: StudyPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudyPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudyPlan model
   */
  interface StudyPlanFieldRefs {
    readonly id: FieldRef<"StudyPlan", 'String'>
    readonly userId: FieldRef<"StudyPlan", 'String'>
    readonly startDate: FieldRef<"StudyPlan", 'DateTime'>
    readonly endDate: FieldRef<"StudyPlan", 'DateTime'>
    readonly content: FieldRef<"StudyPlan", 'String'>
    readonly status: FieldRef<"StudyPlan", 'String'>
    readonly createdAt: FieldRef<"StudyPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudyPlan findUnique
   */
  export type StudyPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan findUniqueOrThrow
   */
  export type StudyPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan findFirst
   */
  export type StudyPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyPlans.
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyPlans.
     */
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * StudyPlan findFirstOrThrow
   */
  export type StudyPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyPlans.
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyPlans.
     */
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * StudyPlan findMany
   */
  export type StudyPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlans to fetch.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudyPlans.
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * StudyPlan create
   */
  export type StudyPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a StudyPlan.
     */
    data: XOR<StudyPlanCreateInput, StudyPlanUncheckedCreateInput>
  }

  /**
   * StudyPlan createMany
   */
  export type StudyPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudyPlans.
     */
    data: StudyPlanCreateManyInput | StudyPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudyPlan createManyAndReturn
   */
  export type StudyPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * The data used to create many StudyPlans.
     */
    data: StudyPlanCreateManyInput | StudyPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyPlan update
   */
  export type StudyPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a StudyPlan.
     */
    data: XOR<StudyPlanUpdateInput, StudyPlanUncheckedUpdateInput>
    /**
     * Choose, which StudyPlan to update.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan updateMany
   */
  export type StudyPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudyPlans.
     */
    data: XOR<StudyPlanUpdateManyMutationInput, StudyPlanUncheckedUpdateManyInput>
    /**
     * Filter which StudyPlans to update
     */
    where?: StudyPlanWhereInput
    /**
     * Limit how many StudyPlans to update.
     */
    limit?: number
  }

  /**
   * StudyPlan updateManyAndReturn
   */
  export type StudyPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * The data used to update StudyPlans.
     */
    data: XOR<StudyPlanUpdateManyMutationInput, StudyPlanUncheckedUpdateManyInput>
    /**
     * Filter which StudyPlans to update
     */
    where?: StudyPlanWhereInput
    /**
     * Limit how many StudyPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyPlan upsert
   */
  export type StudyPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the StudyPlan to update in case it exists.
     */
    where: StudyPlanWhereUniqueInput
    /**
     * In case the StudyPlan found by the `where` argument doesn't exist, create a new StudyPlan with this data.
     */
    create: XOR<StudyPlanCreateInput, StudyPlanUncheckedCreateInput>
    /**
     * In case the StudyPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyPlanUpdateInput, StudyPlanUncheckedUpdateInput>
  }

  /**
   * StudyPlan delete
   */
  export type StudyPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter which StudyPlan to delete.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan deleteMany
   */
  export type StudyPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyPlans to delete
     */
    where?: StudyPlanWhereInput
    /**
     * Limit how many StudyPlans to delete.
     */
    limit?: number
  }

  /**
   * StudyPlan without action
   */
  export type StudyPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
  }


  /**
   * Model PomodoroSession
   */

  export type AggregatePomodoroSession = {
    _count: PomodoroSessionCountAggregateOutputType | null
    _avg: PomodoroSessionAvgAggregateOutputType | null
    _sum: PomodoroSessionSumAggregateOutputType | null
    _min: PomodoroSessionMinAggregateOutputType | null
    _max: PomodoroSessionMaxAggregateOutputType | null
  }

  export type PomodoroSessionAvgAggregateOutputType = {
    duration: number | null
  }

  export type PomodoroSessionSumAggregateOutputType = {
    duration: number | null
  }

  export type PomodoroSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    duration: number | null
    lesson: string | null
    topic: string | null
    startedAt: Date | null
    endedAt: Date | null
    completed: boolean | null
  }

  export type PomodoroSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    duration: number | null
    lesson: string | null
    topic: string | null
    startedAt: Date | null
    endedAt: Date | null
    completed: boolean | null
  }

  export type PomodoroSessionCountAggregateOutputType = {
    id: number
    userId: number
    duration: number
    lesson: number
    topic: number
    startedAt: number
    endedAt: number
    completed: number
    _all: number
  }


  export type PomodoroSessionAvgAggregateInputType = {
    duration?: true
  }

  export type PomodoroSessionSumAggregateInputType = {
    duration?: true
  }

  export type PomodoroSessionMinAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    lesson?: true
    topic?: true
    startedAt?: true
    endedAt?: true
    completed?: true
  }

  export type PomodoroSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    lesson?: true
    topic?: true
    startedAt?: true
    endedAt?: true
    completed?: true
  }

  export type PomodoroSessionCountAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    lesson?: true
    topic?: true
    startedAt?: true
    endedAt?: true
    completed?: true
    _all?: true
  }

  export type PomodoroSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PomodoroSession to aggregate.
     */
    where?: PomodoroSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroSessions to fetch.
     */
    orderBy?: PomodoroSessionOrderByWithRelationInput | PomodoroSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PomodoroSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PomodoroSessions
    **/
    _count?: true | PomodoroSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PomodoroSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PomodoroSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PomodoroSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PomodoroSessionMaxAggregateInputType
  }

  export type GetPomodoroSessionAggregateType<T extends PomodoroSessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePomodoroSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePomodoroSession[P]>
      : GetScalarType<T[P], AggregatePomodoroSession[P]>
  }




  export type PomodoroSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PomodoroSessionWhereInput
    orderBy?: PomodoroSessionOrderByWithAggregationInput | PomodoroSessionOrderByWithAggregationInput[]
    by: PomodoroSessionScalarFieldEnum[] | PomodoroSessionScalarFieldEnum
    having?: PomodoroSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PomodoroSessionCountAggregateInputType | true
    _avg?: PomodoroSessionAvgAggregateInputType
    _sum?: PomodoroSessionSumAggregateInputType
    _min?: PomodoroSessionMinAggregateInputType
    _max?: PomodoroSessionMaxAggregateInputType
  }

  export type PomodoroSessionGroupByOutputType = {
    id: string
    userId: string
    duration: number
    lesson: string | null
    topic: string | null
    startedAt: Date
    endedAt: Date | null
    completed: boolean
    _count: PomodoroSessionCountAggregateOutputType | null
    _avg: PomodoroSessionAvgAggregateOutputType | null
    _sum: PomodoroSessionSumAggregateOutputType | null
    _min: PomodoroSessionMinAggregateOutputType | null
    _max: PomodoroSessionMaxAggregateOutputType | null
  }

  type GetPomodoroSessionGroupByPayload<T extends PomodoroSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PomodoroSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PomodoroSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PomodoroSessionGroupByOutputType[P]>
            : GetScalarType<T[P], PomodoroSessionGroupByOutputType[P]>
        }
      >
    >


  export type PomodoroSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    duration?: boolean
    lesson?: boolean
    topic?: boolean
    startedAt?: boolean
    endedAt?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pomodoroSession"]>

  export type PomodoroSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    duration?: boolean
    lesson?: boolean
    topic?: boolean
    startedAt?: boolean
    endedAt?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pomodoroSession"]>

  export type PomodoroSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    duration?: boolean
    lesson?: boolean
    topic?: boolean
    startedAt?: boolean
    endedAt?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pomodoroSession"]>

  export type PomodoroSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    duration?: boolean
    lesson?: boolean
    topic?: boolean
    startedAt?: boolean
    endedAt?: boolean
    completed?: boolean
  }

  export type PomodoroSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "duration" | "lesson" | "topic" | "startedAt" | "endedAt" | "completed", ExtArgs["result"]["pomodoroSession"]>
  export type PomodoroSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PomodoroSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PomodoroSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PomodoroSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PomodoroSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      duration: number
      lesson: string | null
      topic: string | null
      startedAt: Date
      endedAt: Date | null
      completed: boolean
    }, ExtArgs["result"]["pomodoroSession"]>
    composites: {}
  }

  type PomodoroSessionGetPayload<S extends boolean | null | undefined | PomodoroSessionDefaultArgs> = $Result.GetResult<Prisma.$PomodoroSessionPayload, S>

  type PomodoroSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PomodoroSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PomodoroSessionCountAggregateInputType | true
    }

  export interface PomodoroSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PomodoroSession'], meta: { name: 'PomodoroSession' } }
    /**
     * Find zero or one PomodoroSession that matches the filter.
     * @param {PomodoroSessionFindUniqueArgs} args - Arguments to find a PomodoroSession
     * @example
     * // Get one PomodoroSession
     * const pomodoroSession = await prisma.pomodoroSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PomodoroSessionFindUniqueArgs>(args: SelectSubset<T, PomodoroSessionFindUniqueArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PomodoroSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PomodoroSessionFindUniqueOrThrowArgs} args - Arguments to find a PomodoroSession
     * @example
     * // Get one PomodoroSession
     * const pomodoroSession = await prisma.pomodoroSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PomodoroSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, PomodoroSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PomodoroSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSessionFindFirstArgs} args - Arguments to find a PomodoroSession
     * @example
     * // Get one PomodoroSession
     * const pomodoroSession = await prisma.pomodoroSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PomodoroSessionFindFirstArgs>(args?: SelectSubset<T, PomodoroSessionFindFirstArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PomodoroSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSessionFindFirstOrThrowArgs} args - Arguments to find a PomodoroSession
     * @example
     * // Get one PomodoroSession
     * const pomodoroSession = await prisma.pomodoroSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PomodoroSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, PomodoroSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PomodoroSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PomodoroSessions
     * const pomodoroSessions = await prisma.pomodoroSession.findMany()
     * 
     * // Get first 10 PomodoroSessions
     * const pomodoroSessions = await prisma.pomodoroSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pomodoroSessionWithIdOnly = await prisma.pomodoroSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PomodoroSessionFindManyArgs>(args?: SelectSubset<T, PomodoroSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PomodoroSession.
     * @param {PomodoroSessionCreateArgs} args - Arguments to create a PomodoroSession.
     * @example
     * // Create one PomodoroSession
     * const PomodoroSession = await prisma.pomodoroSession.create({
     *   data: {
     *     // ... data to create a PomodoroSession
     *   }
     * })
     * 
     */
    create<T extends PomodoroSessionCreateArgs>(args: SelectSubset<T, PomodoroSessionCreateArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PomodoroSessions.
     * @param {PomodoroSessionCreateManyArgs} args - Arguments to create many PomodoroSessions.
     * @example
     * // Create many PomodoroSessions
     * const pomodoroSession = await prisma.pomodoroSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PomodoroSessionCreateManyArgs>(args?: SelectSubset<T, PomodoroSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PomodoroSessions and returns the data saved in the database.
     * @param {PomodoroSessionCreateManyAndReturnArgs} args - Arguments to create many PomodoroSessions.
     * @example
     * // Create many PomodoroSessions
     * const pomodoroSession = await prisma.pomodoroSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PomodoroSessions and only return the `id`
     * const pomodoroSessionWithIdOnly = await prisma.pomodoroSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PomodoroSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, PomodoroSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PomodoroSession.
     * @param {PomodoroSessionDeleteArgs} args - Arguments to delete one PomodoroSession.
     * @example
     * // Delete one PomodoroSession
     * const PomodoroSession = await prisma.pomodoroSession.delete({
     *   where: {
     *     // ... filter to delete one PomodoroSession
     *   }
     * })
     * 
     */
    delete<T extends PomodoroSessionDeleteArgs>(args: SelectSubset<T, PomodoroSessionDeleteArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PomodoroSession.
     * @param {PomodoroSessionUpdateArgs} args - Arguments to update one PomodoroSession.
     * @example
     * // Update one PomodoroSession
     * const pomodoroSession = await prisma.pomodoroSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PomodoroSessionUpdateArgs>(args: SelectSubset<T, PomodoroSessionUpdateArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PomodoroSessions.
     * @param {PomodoroSessionDeleteManyArgs} args - Arguments to filter PomodoroSessions to delete.
     * @example
     * // Delete a few PomodoroSessions
     * const { count } = await prisma.pomodoroSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PomodoroSessionDeleteManyArgs>(args?: SelectSubset<T, PomodoroSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PomodoroSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PomodoroSessions
     * const pomodoroSession = await prisma.pomodoroSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PomodoroSessionUpdateManyArgs>(args: SelectSubset<T, PomodoroSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PomodoroSessions and returns the data updated in the database.
     * @param {PomodoroSessionUpdateManyAndReturnArgs} args - Arguments to update many PomodoroSessions.
     * @example
     * // Update many PomodoroSessions
     * const pomodoroSession = await prisma.pomodoroSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PomodoroSessions and only return the `id`
     * const pomodoroSessionWithIdOnly = await prisma.pomodoroSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PomodoroSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, PomodoroSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PomodoroSession.
     * @param {PomodoroSessionUpsertArgs} args - Arguments to update or create a PomodoroSession.
     * @example
     * // Update or create a PomodoroSession
     * const pomodoroSession = await prisma.pomodoroSession.upsert({
     *   create: {
     *     // ... data to create a PomodoroSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PomodoroSession we want to update
     *   }
     * })
     */
    upsert<T extends PomodoroSessionUpsertArgs>(args: SelectSubset<T, PomodoroSessionUpsertArgs<ExtArgs>>): Prisma__PomodoroSessionClient<$Result.GetResult<Prisma.$PomodoroSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PomodoroSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSessionCountArgs} args - Arguments to filter PomodoroSessions to count.
     * @example
     * // Count the number of PomodoroSessions
     * const count = await prisma.pomodoroSession.count({
     *   where: {
     *     // ... the filter for the PomodoroSessions we want to count
     *   }
     * })
    **/
    count<T extends PomodoroSessionCountArgs>(
      args?: Subset<T, PomodoroSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PomodoroSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PomodoroSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PomodoroSessionAggregateArgs>(args: Subset<T, PomodoroSessionAggregateArgs>): Prisma.PrismaPromise<GetPomodoroSessionAggregateType<T>>

    /**
     * Group by PomodoroSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PomodoroSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PomodoroSessionGroupByArgs['orderBy'] }
        : { orderBy?: PomodoroSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PomodoroSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPomodoroSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PomodoroSession model
   */
  readonly fields: PomodoroSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PomodoroSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PomodoroSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PomodoroSession model
   */
  interface PomodoroSessionFieldRefs {
    readonly id: FieldRef<"PomodoroSession", 'String'>
    readonly userId: FieldRef<"PomodoroSession", 'String'>
    readonly duration: FieldRef<"PomodoroSession", 'Int'>
    readonly lesson: FieldRef<"PomodoroSession", 'String'>
    readonly topic: FieldRef<"PomodoroSession", 'String'>
    readonly startedAt: FieldRef<"PomodoroSession", 'DateTime'>
    readonly endedAt: FieldRef<"PomodoroSession", 'DateTime'>
    readonly completed: FieldRef<"PomodoroSession", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PomodoroSession findUnique
   */
  export type PomodoroSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSession
     */
    omit?: PomodoroSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroSession to fetch.
     */
    where: PomodoroSessionWhereUniqueInput
  }

  /**
   * PomodoroSession findUniqueOrThrow
   */
  export type PomodoroSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSession
     */
    omit?: PomodoroSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroSession to fetch.
     */
    where: PomodoroSessionWhereUniqueInput
  }

  /**
   * PomodoroSession findFirst
   */
  export type PomodoroSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSession
     */
    omit?: PomodoroSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroSession to fetch.
     */
    where?: PomodoroSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroSessions to fetch.
     */
    orderBy?: PomodoroSessionOrderByWithRelationInput | PomodoroSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PomodoroSessions.
     */
    cursor?: PomodoroSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PomodoroSessions.
     */
    distinct?: PomodoroSessionScalarFieldEnum | PomodoroSessionScalarFieldEnum[]
  }

  /**
   * PomodoroSession findFirstOrThrow
   */
  export type PomodoroSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSession
     */
    omit?: PomodoroSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroSession to fetch.
     */
    where?: PomodoroSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroSessions to fetch.
     */
    orderBy?: PomodoroSessionOrderByWithRelationInput | PomodoroSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PomodoroSessions.
     */
    cursor?: PomodoroSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PomodoroSessions.
     */
    distinct?: PomodoroSessionScalarFieldEnum | PomodoroSessionScalarFieldEnum[]
  }

  /**
   * PomodoroSession findMany
   */
  export type PomodoroSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSession
     */
    omit?: PomodoroSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroSessions to fetch.
     */
    where?: PomodoroSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroSessions to fetch.
     */
    orderBy?: PomodoroSessionOrderByWithRelationInput | PomodoroSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PomodoroSessions.
     */
    cursor?: PomodoroSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroSessions.
     */
    skip?: number
    distinct?: PomodoroSessionScalarFieldEnum | PomodoroSessionScalarFieldEnum[]
  }

  /**
   * PomodoroSession create
   */
  export type PomodoroSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSession
     */
    omit?: PomodoroSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a PomodoroSession.
     */
    data: XOR<PomodoroSessionCreateInput, PomodoroSessionUncheckedCreateInput>
  }

  /**
   * PomodoroSession createMany
   */
  export type PomodoroSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PomodoroSessions.
     */
    data: PomodoroSessionCreateManyInput | PomodoroSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PomodoroSession createManyAndReturn
   */
  export type PomodoroSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSession
     */
    omit?: PomodoroSessionOmit<ExtArgs> | null
    /**
     * The data used to create many PomodoroSessions.
     */
    data: PomodoroSessionCreateManyInput | PomodoroSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PomodoroSession update
   */
  export type PomodoroSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSession
     */
    omit?: PomodoroSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a PomodoroSession.
     */
    data: XOR<PomodoroSessionUpdateInput, PomodoroSessionUncheckedUpdateInput>
    /**
     * Choose, which PomodoroSession to update.
     */
    where: PomodoroSessionWhereUniqueInput
  }

  /**
   * PomodoroSession updateMany
   */
  export type PomodoroSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PomodoroSessions.
     */
    data: XOR<PomodoroSessionUpdateManyMutationInput, PomodoroSessionUncheckedUpdateManyInput>
    /**
     * Filter which PomodoroSessions to update
     */
    where?: PomodoroSessionWhereInput
    /**
     * Limit how many PomodoroSessions to update.
     */
    limit?: number
  }

  /**
   * PomodoroSession updateManyAndReturn
   */
  export type PomodoroSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSession
     */
    omit?: PomodoroSessionOmit<ExtArgs> | null
    /**
     * The data used to update PomodoroSessions.
     */
    data: XOR<PomodoroSessionUpdateManyMutationInput, PomodoroSessionUncheckedUpdateManyInput>
    /**
     * Filter which PomodoroSessions to update
     */
    where?: PomodoroSessionWhereInput
    /**
     * Limit how many PomodoroSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PomodoroSession upsert
   */
  export type PomodoroSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSession
     */
    omit?: PomodoroSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the PomodoroSession to update in case it exists.
     */
    where: PomodoroSessionWhereUniqueInput
    /**
     * In case the PomodoroSession found by the `where` argument doesn't exist, create a new PomodoroSession with this data.
     */
    create: XOR<PomodoroSessionCreateInput, PomodoroSessionUncheckedCreateInput>
    /**
     * In case the PomodoroSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PomodoroSessionUpdateInput, PomodoroSessionUncheckedUpdateInput>
  }

  /**
   * PomodoroSession delete
   */
  export type PomodoroSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSession
     */
    omit?: PomodoroSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
    /**
     * Filter which PomodoroSession to delete.
     */
    where: PomodoroSessionWhereUniqueInput
  }

  /**
   * PomodoroSession deleteMany
   */
  export type PomodoroSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PomodoroSessions to delete
     */
    where?: PomodoroSessionWhereInput
    /**
     * Limit how many PomodoroSessions to delete.
     */
    limit?: number
  }

  /**
   * PomodoroSession without action
   */
  export type PomodoroSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSession
     */
    select?: PomodoroSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSession
     */
    omit?: PomodoroSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSessionInclude<ExtArgs> | null
  }


  /**
   * Model Badge
   */

  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    criteriaKey: string | null
  }

  export type BadgeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    criteriaKey: string | null
  }

  export type BadgeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    criteriaKey: number
    _all: number
  }


  export type BadgeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    criteriaKey?: true
  }

  export type BadgeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    criteriaKey?: true
  }

  export type BadgeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    criteriaKey?: true
    _all?: true
  }

  export type BadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badge to aggregate.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type BadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithAggregationInput | BadgeOrderByWithAggregationInput[]
    by: BadgeScalarFieldEnum[] | BadgeScalarFieldEnum
    having?: BadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }

  export type BadgeGroupByOutputType = {
    id: string
    name: string
    description: string
    imageUrl: string | null
    criteriaKey: string | null
    _count: BadgeCountAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends BadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type BadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    criteriaKey?: boolean
    userBadges?: boolean | Badge$userBadgesArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    criteriaKey?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    criteriaKey?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    criteriaKey?: boolean
  }

  export type BadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imageUrl" | "criteriaKey", ExtArgs["result"]["badge"]>
  export type BadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBadges?: boolean | Badge$userBadgesArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BadgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Badge"
    objects: {
      userBadges: Prisma.$UserBadgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      imageUrl: string | null
      criteriaKey: string | null
    }, ExtArgs["result"]["badge"]>
    composites: {}
  }

  type BadgeGetPayload<S extends boolean | null | undefined | BadgeDefaultArgs> = $Result.GetResult<Prisma.$BadgePayload, S>

  type BadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgeCountAggregateInputType | true
    }

  export interface BadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Badge'], meta: { name: 'Badge' } }
    /**
     * Find zero or one Badge that matches the filter.
     * @param {BadgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeFindUniqueArgs>(args: SelectSubset<T, BadgeFindUniqueArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Badge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BadgeFindUniqueOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeFindFirstArgs>(args?: SelectSubset<T, BadgeFindFirstArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeWithIdOnly = await prisma.badge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeFindManyArgs>(args?: SelectSubset<T, BadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Badge.
     * @param {BadgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
     */
    create<T extends BadgeCreateArgs>(args: SelectSubset<T, BadgeCreateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Badges.
     * @param {BadgeCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeCreateManyArgs>(args?: SelectSubset<T, BadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Badges and returns the data saved in the database.
     * @param {BadgeCreateManyAndReturnArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, BadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Badge.
     * @param {BadgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
     */
    delete<T extends BadgeDeleteArgs>(args: SelectSubset<T, BadgeDeleteArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Badge.
     * @param {BadgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeUpdateArgs>(args: SelectSubset<T, BadgeUpdateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Badges.
     * @param {BadgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeDeleteManyArgs>(args?: SelectSubset<T, BadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeUpdateManyArgs>(args: SelectSubset<T, BadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges and returns the data updated in the database.
     * @param {BadgeUpdateManyAndReturnArgs} args - Arguments to update many Badges.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, BadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Badge.
     * @param {BadgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
     */
    upsert<T extends BadgeUpsertArgs>(args: SelectSubset<T, BadgeUpsertArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgeCountArgs>(
      args?: Subset<T, BadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): Prisma.PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeGroupByArgs['orderBy'] }
        : { orderBy?: BadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Badge model
   */
  readonly fields: BadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userBadges<T extends Badge$userBadgesArgs<ExtArgs> = {}>(args?: Subset<T, Badge$userBadgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Badge model
   */
  interface BadgeFieldRefs {
    readonly id: FieldRef<"Badge", 'String'>
    readonly name: FieldRef<"Badge", 'String'>
    readonly description: FieldRef<"Badge", 'String'>
    readonly imageUrl: FieldRef<"Badge", 'String'>
    readonly criteriaKey: FieldRef<"Badge", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Badge findUnique
   */
  export type BadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findUniqueOrThrow
   */
  export type BadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findFirst
   */
  export type BadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findFirstOrThrow
   */
  export type BadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findMany
   */
  export type BadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge create
   */
  export type BadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Badge.
     */
    data: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
  }

  /**
   * Badge createMany
   */
  export type BadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge createManyAndReturn
   */
  export type BadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge update
   */
  export type BadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Badge.
     */
    data: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
    /**
     * Choose, which Badge to update.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge updateMany
   */
  export type BadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge updateManyAndReturn
   */
  export type BadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge upsert
   */
  export type BadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Badge to update in case it exists.
     */
    where: BadgeWhereUniqueInput
    /**
     * In case the Badge found by the `where` argument doesn't exist, create a new Badge with this data.
     */
    create: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
    /**
     * In case the Badge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
  }

  /**
   * Badge delete
   */
  export type BadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter which Badge to delete.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge deleteMany
   */
  export type BadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to delete
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to delete.
     */
    limit?: number
  }

  /**
   * Badge.userBadges
   */
  export type Badge$userBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    cursor?: UserBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * Badge without action
   */
  export type BadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
  }


  /**
   * Model UserBadge
   */

  export type AggregateUserBadge = {
    _count: UserBadgeCountAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  export type UserBadgeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    badgeId: string | null
    earnedAt: Date | null
  }

  export type UserBadgeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    badgeId: string | null
    earnedAt: Date | null
  }

  export type UserBadgeCountAggregateOutputType = {
    id: number
    userId: number
    badgeId: number
    earnedAt: number
    _all: number
  }


  export type UserBadgeMinAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    earnedAt?: true
  }

  export type UserBadgeMaxAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    earnedAt?: true
  }

  export type UserBadgeCountAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    earnedAt?: true
    _all?: true
  }

  export type UserBadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadge to aggregate.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBadges
    **/
    _count?: true | UserBadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBadgeMaxAggregateInputType
  }

  export type GetUserBadgeAggregateType<T extends UserBadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBadge[P]>
      : GetScalarType<T[P], AggregateUserBadge[P]>
  }




  export type UserBadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithAggregationInput | UserBadgeOrderByWithAggregationInput[]
    by: UserBadgeScalarFieldEnum[] | UserBadgeScalarFieldEnum
    having?: UserBadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBadgeCountAggregateInputType | true
    _min?: UserBadgeMinAggregateInputType
    _max?: UserBadgeMaxAggregateInputType
  }

  export type UserBadgeGroupByOutputType = {
    id: string
    userId: string
    badgeId: string
    earnedAt: Date
    _count: UserBadgeCountAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  type GetUserBadgeGroupByPayload<T extends UserBadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
            : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
        }
      >
    >


  export type UserBadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    earnedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    earnedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    earnedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectScalar = {
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    earnedAt?: boolean
  }

  export type UserBadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "badgeId" | "earnedAt", ExtArgs["result"]["userBadge"]>
  export type UserBadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }
  export type UserBadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }
  export type UserBadgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }

  export type $UserBadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBadge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      badge: Prisma.$BadgePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      badgeId: string
      earnedAt: Date
    }, ExtArgs["result"]["userBadge"]>
    composites: {}
  }

  type UserBadgeGetPayload<S extends boolean | null | undefined | UserBadgeDefaultArgs> = $Result.GetResult<Prisma.$UserBadgePayload, S>

  type UserBadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBadgeCountAggregateInputType | true
    }

  export interface UserBadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBadge'], meta: { name: 'UserBadge' } }
    /**
     * Find zero or one UserBadge that matches the filter.
     * @param {UserBadgeFindUniqueArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBadgeFindUniqueArgs>(args: SelectSubset<T, UserBadgeFindUniqueArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBadge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBadgeFindUniqueOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBadgeFindFirstArgs>(args?: SelectSubset<T, UserBadgeFindFirstArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBadge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBadges
     * const userBadges = await prisma.userBadge.findMany()
     * 
     * // Get first 10 UserBadges
     * const userBadges = await prisma.userBadge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBadgeFindManyArgs>(args?: SelectSubset<T, UserBadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBadge.
     * @param {UserBadgeCreateArgs} args - Arguments to create a UserBadge.
     * @example
     * // Create one UserBadge
     * const UserBadge = await prisma.userBadge.create({
     *   data: {
     *     // ... data to create a UserBadge
     *   }
     * })
     * 
     */
    create<T extends UserBadgeCreateArgs>(args: SelectSubset<T, UserBadgeCreateArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBadges.
     * @param {UserBadgeCreateManyArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBadgeCreateManyArgs>(args?: SelectSubset<T, UserBadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBadges and returns the data saved in the database.
     * @param {UserBadgeCreateManyAndReturnArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBadges and only return the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserBadge.
     * @param {UserBadgeDeleteArgs} args - Arguments to delete one UserBadge.
     * @example
     * // Delete one UserBadge
     * const UserBadge = await prisma.userBadge.delete({
     *   where: {
     *     // ... filter to delete one UserBadge
     *   }
     * })
     * 
     */
    delete<T extends UserBadgeDeleteArgs>(args: SelectSubset<T, UserBadgeDeleteArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBadge.
     * @param {UserBadgeUpdateArgs} args - Arguments to update one UserBadge.
     * @example
     * // Update one UserBadge
     * const userBadge = await prisma.userBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBadgeUpdateArgs>(args: SelectSubset<T, UserBadgeUpdateArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBadges.
     * @param {UserBadgeDeleteManyArgs} args - Arguments to filter UserBadges to delete.
     * @example
     * // Delete a few UserBadges
     * const { count } = await prisma.userBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBadgeDeleteManyArgs>(args?: SelectSubset<T, UserBadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBadges
     * const userBadge = await prisma.userBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBadgeUpdateManyArgs>(args: SelectSubset<T, UserBadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBadges and returns the data updated in the database.
     * @param {UserBadgeUpdateManyAndReturnArgs} args - Arguments to update many UserBadges.
     * @example
     * // Update many UserBadges
     * const userBadge = await prisma.userBadge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserBadges and only return the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserBadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserBadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserBadge.
     * @param {UserBadgeUpsertArgs} args - Arguments to update or create a UserBadge.
     * @example
     * // Update or create a UserBadge
     * const userBadge = await prisma.userBadge.upsert({
     *   create: {
     *     // ... data to create a UserBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBadge we want to update
     *   }
     * })
     */
    upsert<T extends UserBadgeUpsertArgs>(args: SelectSubset<T, UserBadgeUpsertArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeCountArgs} args - Arguments to filter UserBadges to count.
     * @example
     * // Count the number of UserBadges
     * const count = await prisma.userBadge.count({
     *   where: {
     *     // ... the filter for the UserBadges we want to count
     *   }
     * })
    **/
    count<T extends UserBadgeCountArgs>(
      args?: Subset<T, UserBadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserBadgeAggregateArgs>(args: Subset<T, UserBadgeAggregateArgs>): Prisma.PrismaPromise<GetUserBadgeAggregateType<T>>

    /**
     * Group by UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserBadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBadgeGroupByArgs['orderBy'] }
        : { orderBy?: UserBadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBadge model
   */
  readonly fields: UserBadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBadge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    badge<T extends BadgeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BadgeDefaultArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserBadge model
   */
  interface UserBadgeFieldRefs {
    readonly id: FieldRef<"UserBadge", 'String'>
    readonly userId: FieldRef<"UserBadge", 'String'>
    readonly badgeId: FieldRef<"UserBadge", 'String'>
    readonly earnedAt: FieldRef<"UserBadge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserBadge findUnique
   */
  export type UserBadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findUniqueOrThrow
   */
  export type UserBadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findFirst
   */
  export type UserBadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findFirstOrThrow
   */
  export type UserBadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findMany
   */
  export type UserBadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadges to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge create
   */
  export type UserBadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBadge.
     */
    data: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
  }

  /**
   * UserBadge createMany
   */
  export type UserBadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBadge createManyAndReturn
   */
  export type UserBadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBadge update
   */
  export type UserBadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBadge.
     */
    data: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
    /**
     * Choose, which UserBadge to update.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge updateMany
   */
  export type UserBadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBadges.
     */
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyInput>
    /**
     * Filter which UserBadges to update
     */
    where?: UserBadgeWhereInput
    /**
     * Limit how many UserBadges to update.
     */
    limit?: number
  }

  /**
   * UserBadge updateManyAndReturn
   */
  export type UserBadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * The data used to update UserBadges.
     */
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyInput>
    /**
     * Filter which UserBadges to update
     */
    where?: UserBadgeWhereInput
    /**
     * Limit how many UserBadges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBadge upsert
   */
  export type UserBadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBadge to update in case it exists.
     */
    where: UserBadgeWhereUniqueInput
    /**
     * In case the UserBadge found by the `where` argument doesn't exist, create a new UserBadge with this data.
     */
    create: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
    /**
     * In case the UserBadge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
  }

  /**
   * UserBadge delete
   */
  export type UserBadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter which UserBadge to delete.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge deleteMany
   */
  export type UserBadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadges to delete
     */
    where?: UserBadgeWhereInput
    /**
     * Limit how many UserBadges to delete.
     */
    limit?: number
  }

  /**
   * UserBadge without action
   */
  export type UserBadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
  }


  /**
   * Model NotificationSettings
   */

  export type AggregateNotificationSettings = {
    _count: NotificationSettingsCountAggregateOutputType | null
    _min: NotificationSettingsMinAggregateOutputType | null
    _max: NotificationSettingsMaxAggregateOutputType | null
  }

  export type NotificationSettingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    pomodoroNotifications: string | null
    studyPlanReminders: boolean | null
    examAnalysisAlerts: boolean | null
    dailyReminders: boolean | null
  }

  export type NotificationSettingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    pomodoroNotifications: string | null
    studyPlanReminders: boolean | null
    examAnalysisAlerts: boolean | null
    dailyReminders: boolean | null
  }

  export type NotificationSettingsCountAggregateOutputType = {
    id: number
    userId: number
    pomodoroNotifications: number
    studyPlanReminders: number
    examAnalysisAlerts: number
    dailyReminders: number
    _all: number
  }


  export type NotificationSettingsMinAggregateInputType = {
    id?: true
    userId?: true
    pomodoroNotifications?: true
    studyPlanReminders?: true
    examAnalysisAlerts?: true
    dailyReminders?: true
  }

  export type NotificationSettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    pomodoroNotifications?: true
    studyPlanReminders?: true
    examAnalysisAlerts?: true
    dailyReminders?: true
  }

  export type NotificationSettingsCountAggregateInputType = {
    id?: true
    userId?: true
    pomodoroNotifications?: true
    studyPlanReminders?: true
    examAnalysisAlerts?: true
    dailyReminders?: true
    _all?: true
  }

  export type NotificationSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationSettings to aggregate.
     */
    where?: NotificationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingsOrderByWithRelationInput | NotificationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationSettings
    **/
    _count?: true | NotificationSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationSettingsMaxAggregateInputType
  }

  export type GetNotificationSettingsAggregateType<T extends NotificationSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationSettings[P]>
      : GetScalarType<T[P], AggregateNotificationSettings[P]>
  }




  export type NotificationSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationSettingsWhereInput
    orderBy?: NotificationSettingsOrderByWithAggregationInput | NotificationSettingsOrderByWithAggregationInput[]
    by: NotificationSettingsScalarFieldEnum[] | NotificationSettingsScalarFieldEnum
    having?: NotificationSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationSettingsCountAggregateInputType | true
    _min?: NotificationSettingsMinAggregateInputType
    _max?: NotificationSettingsMaxAggregateInputType
  }

  export type NotificationSettingsGroupByOutputType = {
    id: string
    userId: string
    pomodoroNotifications: string
    studyPlanReminders: boolean
    examAnalysisAlerts: boolean
    dailyReminders: boolean
    _count: NotificationSettingsCountAggregateOutputType | null
    _min: NotificationSettingsMinAggregateOutputType | null
    _max: NotificationSettingsMaxAggregateOutputType | null
  }

  type GetNotificationSettingsGroupByPayload<T extends NotificationSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationSettingsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pomodoroNotifications?: boolean
    studyPlanReminders?: boolean
    examAnalysisAlerts?: boolean
    dailyReminders?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationSettings"]>

  export type NotificationSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pomodoroNotifications?: boolean
    studyPlanReminders?: boolean
    examAnalysisAlerts?: boolean
    dailyReminders?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationSettings"]>

  export type NotificationSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pomodoroNotifications?: boolean
    studyPlanReminders?: boolean
    examAnalysisAlerts?: boolean
    dailyReminders?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationSettings"]>

  export type NotificationSettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    pomodoroNotifications?: boolean
    studyPlanReminders?: boolean
    examAnalysisAlerts?: boolean
    dailyReminders?: boolean
  }

  export type NotificationSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "pomodoroNotifications" | "studyPlanReminders" | "examAnalysisAlerts" | "dailyReminders", ExtArgs["result"]["notificationSettings"]>
  export type NotificationSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      pomodoroNotifications: string
      studyPlanReminders: boolean
      examAnalysisAlerts: boolean
      dailyReminders: boolean
    }, ExtArgs["result"]["notificationSettings"]>
    composites: {}
  }

  type NotificationSettingsGetPayload<S extends boolean | null | undefined | NotificationSettingsDefaultArgs> = $Result.GetResult<Prisma.$NotificationSettingsPayload, S>

  type NotificationSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationSettingsCountAggregateInputType | true
    }

  export interface NotificationSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationSettings'], meta: { name: 'NotificationSettings' } }
    /**
     * Find zero or one NotificationSettings that matches the filter.
     * @param {NotificationSettingsFindUniqueArgs} args - Arguments to find a NotificationSettings
     * @example
     * // Get one NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationSettingsFindUniqueArgs>(args: SelectSubset<T, NotificationSettingsFindUniqueArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationSettingsFindUniqueOrThrowArgs} args - Arguments to find a NotificationSettings
     * @example
     * // Get one NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsFindFirstArgs} args - Arguments to find a NotificationSettings
     * @example
     * // Get one NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationSettingsFindFirstArgs>(args?: SelectSubset<T, NotificationSettingsFindFirstArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsFindFirstOrThrowArgs} args - Arguments to find a NotificationSettings
     * @example
     * // Get one NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findMany()
     * 
     * // Get first 10 NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationSettingsWithIdOnly = await prisma.notificationSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationSettingsFindManyArgs>(args?: SelectSubset<T, NotificationSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationSettings.
     * @param {NotificationSettingsCreateArgs} args - Arguments to create a NotificationSettings.
     * @example
     * // Create one NotificationSettings
     * const NotificationSettings = await prisma.notificationSettings.create({
     *   data: {
     *     // ... data to create a NotificationSettings
     *   }
     * })
     * 
     */
    create<T extends NotificationSettingsCreateArgs>(args: SelectSubset<T, NotificationSettingsCreateArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationSettings.
     * @param {NotificationSettingsCreateManyArgs} args - Arguments to create many NotificationSettings.
     * @example
     * // Create many NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationSettingsCreateManyArgs>(args?: SelectSubset<T, NotificationSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationSettings and returns the data saved in the database.
     * @param {NotificationSettingsCreateManyAndReturnArgs} args - Arguments to create many NotificationSettings.
     * @example
     * // Create many NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationSettings and only return the `id`
     * const notificationSettingsWithIdOnly = await prisma.notificationSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationSettings.
     * @param {NotificationSettingsDeleteArgs} args - Arguments to delete one NotificationSettings.
     * @example
     * // Delete one NotificationSettings
     * const NotificationSettings = await prisma.notificationSettings.delete({
     *   where: {
     *     // ... filter to delete one NotificationSettings
     *   }
     * })
     * 
     */
    delete<T extends NotificationSettingsDeleteArgs>(args: SelectSubset<T, NotificationSettingsDeleteArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationSettings.
     * @param {NotificationSettingsUpdateArgs} args - Arguments to update one NotificationSettings.
     * @example
     * // Update one NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationSettingsUpdateArgs>(args: SelectSubset<T, NotificationSettingsUpdateArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationSettings.
     * @param {NotificationSettingsDeleteManyArgs} args - Arguments to filter NotificationSettings to delete.
     * @example
     * // Delete a few NotificationSettings
     * const { count } = await prisma.notificationSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationSettingsDeleteManyArgs>(args?: SelectSubset<T, NotificationSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationSettingsUpdateManyArgs>(args: SelectSubset<T, NotificationSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationSettings and returns the data updated in the database.
     * @param {NotificationSettingsUpdateManyAndReturnArgs} args - Arguments to update many NotificationSettings.
     * @example
     * // Update many NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationSettings and only return the `id`
     * const notificationSettingsWithIdOnly = await prisma.notificationSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationSettings.
     * @param {NotificationSettingsUpsertArgs} args - Arguments to update or create a NotificationSettings.
     * @example
     * // Update or create a NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.upsert({
     *   create: {
     *     // ... data to create a NotificationSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationSettings we want to update
     *   }
     * })
     */
    upsert<T extends NotificationSettingsUpsertArgs>(args: SelectSubset<T, NotificationSettingsUpsertArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsCountArgs} args - Arguments to filter NotificationSettings to count.
     * @example
     * // Count the number of NotificationSettings
     * const count = await prisma.notificationSettings.count({
     *   where: {
     *     // ... the filter for the NotificationSettings we want to count
     *   }
     * })
    **/
    count<T extends NotificationSettingsCountArgs>(
      args?: Subset<T, NotificationSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationSettingsAggregateArgs>(args: Subset<T, NotificationSettingsAggregateArgs>): Prisma.PrismaPromise<GetNotificationSettingsAggregateType<T>>

    /**
     * Group by NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationSettingsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationSettings model
   */
  readonly fields: NotificationSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NotificationSettings model
   */
  interface NotificationSettingsFieldRefs {
    readonly id: FieldRef<"NotificationSettings", 'String'>
    readonly userId: FieldRef<"NotificationSettings", 'String'>
    readonly pomodoroNotifications: FieldRef<"NotificationSettings", 'String'>
    readonly studyPlanReminders: FieldRef<"NotificationSettings", 'Boolean'>
    readonly examAnalysisAlerts: FieldRef<"NotificationSettings", 'Boolean'>
    readonly dailyReminders: FieldRef<"NotificationSettings", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * NotificationSettings findUnique
   */
  export type NotificationSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where: NotificationSettingsWhereUniqueInput
  }

  /**
   * NotificationSettings findUniqueOrThrow
   */
  export type NotificationSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where: NotificationSettingsWhereUniqueInput
  }

  /**
   * NotificationSettings findFirst
   */
  export type NotificationSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where?: NotificationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingsOrderByWithRelationInput | NotificationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSettings.
     */
    cursor?: NotificationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSettings.
     */
    distinct?: NotificationSettingsScalarFieldEnum | NotificationSettingsScalarFieldEnum[]
  }

  /**
   * NotificationSettings findFirstOrThrow
   */
  export type NotificationSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where?: NotificationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingsOrderByWithRelationInput | NotificationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSettings.
     */
    cursor?: NotificationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSettings.
     */
    distinct?: NotificationSettingsScalarFieldEnum | NotificationSettingsScalarFieldEnum[]
  }

  /**
   * NotificationSettings findMany
   */
  export type NotificationSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where?: NotificationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingsOrderByWithRelationInput | NotificationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationSettings.
     */
    cursor?: NotificationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    distinct?: NotificationSettingsScalarFieldEnum | NotificationSettingsScalarFieldEnum[]
  }

  /**
   * NotificationSettings create
   */
  export type NotificationSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationSettings.
     */
    data: XOR<NotificationSettingsCreateInput, NotificationSettingsUncheckedCreateInput>
  }

  /**
   * NotificationSettings createMany
   */
  export type NotificationSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationSettings.
     */
    data: NotificationSettingsCreateManyInput | NotificationSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationSettings createManyAndReturn
   */
  export type NotificationSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationSettings.
     */
    data: NotificationSettingsCreateManyInput | NotificationSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationSettings update
   */
  export type NotificationSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationSettings.
     */
    data: XOR<NotificationSettingsUpdateInput, NotificationSettingsUncheckedUpdateInput>
    /**
     * Choose, which NotificationSettings to update.
     */
    where: NotificationSettingsWhereUniqueInput
  }

  /**
   * NotificationSettings updateMany
   */
  export type NotificationSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationSettings.
     */
    data: XOR<NotificationSettingsUpdateManyMutationInput, NotificationSettingsUncheckedUpdateManyInput>
    /**
     * Filter which NotificationSettings to update
     */
    where?: NotificationSettingsWhereInput
    /**
     * Limit how many NotificationSettings to update.
     */
    limit?: number
  }

  /**
   * NotificationSettings updateManyAndReturn
   */
  export type NotificationSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * The data used to update NotificationSettings.
     */
    data: XOR<NotificationSettingsUpdateManyMutationInput, NotificationSettingsUncheckedUpdateManyInput>
    /**
     * Filter which NotificationSettings to update
     */
    where?: NotificationSettingsWhereInput
    /**
     * Limit how many NotificationSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationSettings upsert
   */
  export type NotificationSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationSettings to update in case it exists.
     */
    where: NotificationSettingsWhereUniqueInput
    /**
     * In case the NotificationSettings found by the `where` argument doesn't exist, create a new NotificationSettings with this data.
     */
    create: XOR<NotificationSettingsCreateInput, NotificationSettingsUncheckedCreateInput>
    /**
     * In case the NotificationSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationSettingsUpdateInput, NotificationSettingsUncheckedUpdateInput>
  }

  /**
   * NotificationSettings delete
   */
  export type NotificationSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * Filter which NotificationSettings to delete.
     */
    where: NotificationSettingsWhereUniqueInput
  }

  /**
   * NotificationSettings deleteMany
   */
  export type NotificationSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationSettings to delete
     */
    where?: NotificationSettingsWhereInput
    /**
     * Limit how many NotificationSettings to delete.
     */
    limit?: number
  }

  /**
   * NotificationSettings without action
   */
  export type NotificationSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
  }


  /**
   * Model PomodoroSettings
   */

  export type AggregatePomodoroSettings = {
    _count: PomodoroSettingsCountAggregateOutputType | null
    _avg: PomodoroSettingsAvgAggregateOutputType | null
    _sum: PomodoroSettingsSumAggregateOutputType | null
    _min: PomodoroSettingsMinAggregateOutputType | null
    _max: PomodoroSettingsMaxAggregateOutputType | null
  }

  export type PomodoroSettingsAvgAggregateOutputType = {
    workDuration: number | null
    shortBreakDuration: number | null
    longBreakDuration: number | null
    longBreakInterval: number | null
    dailyGoal: number | null
  }

  export type PomodoroSettingsSumAggregateOutputType = {
    workDuration: number | null
    shortBreakDuration: number | null
    longBreakDuration: number | null
    longBreakInterval: number | null
    dailyGoal: number | null
  }

  export type PomodoroSettingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    workDuration: number | null
    shortBreakDuration: number | null
    longBreakDuration: number | null
    longBreakInterval: number | null
    dailyGoal: number | null
    autoStartBreaks: boolean | null
    autoStartPomodoros: boolean | null
  }

  export type PomodoroSettingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    workDuration: number | null
    shortBreakDuration: number | null
    longBreakDuration: number | null
    longBreakInterval: number | null
    dailyGoal: number | null
    autoStartBreaks: boolean | null
    autoStartPomodoros: boolean | null
  }

  export type PomodoroSettingsCountAggregateOutputType = {
    id: number
    userId: number
    workDuration: number
    shortBreakDuration: number
    longBreakDuration: number
    longBreakInterval: number
    dailyGoal: number
    autoStartBreaks: number
    autoStartPomodoros: number
    _all: number
  }


  export type PomodoroSettingsAvgAggregateInputType = {
    workDuration?: true
    shortBreakDuration?: true
    longBreakDuration?: true
    longBreakInterval?: true
    dailyGoal?: true
  }

  export type PomodoroSettingsSumAggregateInputType = {
    workDuration?: true
    shortBreakDuration?: true
    longBreakDuration?: true
    longBreakInterval?: true
    dailyGoal?: true
  }

  export type PomodoroSettingsMinAggregateInputType = {
    id?: true
    userId?: true
    workDuration?: true
    shortBreakDuration?: true
    longBreakDuration?: true
    longBreakInterval?: true
    dailyGoal?: true
    autoStartBreaks?: true
    autoStartPomodoros?: true
  }

  export type PomodoroSettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    workDuration?: true
    shortBreakDuration?: true
    longBreakDuration?: true
    longBreakInterval?: true
    dailyGoal?: true
    autoStartBreaks?: true
    autoStartPomodoros?: true
  }

  export type PomodoroSettingsCountAggregateInputType = {
    id?: true
    userId?: true
    workDuration?: true
    shortBreakDuration?: true
    longBreakDuration?: true
    longBreakInterval?: true
    dailyGoal?: true
    autoStartBreaks?: true
    autoStartPomodoros?: true
    _all?: true
  }

  export type PomodoroSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PomodoroSettings to aggregate.
     */
    where?: PomodoroSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroSettings to fetch.
     */
    orderBy?: PomodoroSettingsOrderByWithRelationInput | PomodoroSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PomodoroSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PomodoroSettings
    **/
    _count?: true | PomodoroSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PomodoroSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PomodoroSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PomodoroSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PomodoroSettingsMaxAggregateInputType
  }

  export type GetPomodoroSettingsAggregateType<T extends PomodoroSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregatePomodoroSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePomodoroSettings[P]>
      : GetScalarType<T[P], AggregatePomodoroSettings[P]>
  }




  export type PomodoroSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PomodoroSettingsWhereInput
    orderBy?: PomodoroSettingsOrderByWithAggregationInput | PomodoroSettingsOrderByWithAggregationInput[]
    by: PomodoroSettingsScalarFieldEnum[] | PomodoroSettingsScalarFieldEnum
    having?: PomodoroSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PomodoroSettingsCountAggregateInputType | true
    _avg?: PomodoroSettingsAvgAggregateInputType
    _sum?: PomodoroSettingsSumAggregateInputType
    _min?: PomodoroSettingsMinAggregateInputType
    _max?: PomodoroSettingsMaxAggregateInputType
  }

  export type PomodoroSettingsGroupByOutputType = {
    id: string
    userId: string
    workDuration: number
    shortBreakDuration: number
    longBreakDuration: number
    longBreakInterval: number
    dailyGoal: number
    autoStartBreaks: boolean
    autoStartPomodoros: boolean
    _count: PomodoroSettingsCountAggregateOutputType | null
    _avg: PomodoroSettingsAvgAggregateOutputType | null
    _sum: PomodoroSettingsSumAggregateOutputType | null
    _min: PomodoroSettingsMinAggregateOutputType | null
    _max: PomodoroSettingsMaxAggregateOutputType | null
  }

  type GetPomodoroSettingsGroupByPayload<T extends PomodoroSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PomodoroSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PomodoroSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PomodoroSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], PomodoroSettingsGroupByOutputType[P]>
        }
      >
    >


  export type PomodoroSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workDuration?: boolean
    shortBreakDuration?: boolean
    longBreakDuration?: boolean
    longBreakInterval?: boolean
    dailyGoal?: boolean
    autoStartBreaks?: boolean
    autoStartPomodoros?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pomodoroSettings"]>

  export type PomodoroSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workDuration?: boolean
    shortBreakDuration?: boolean
    longBreakDuration?: boolean
    longBreakInterval?: boolean
    dailyGoal?: boolean
    autoStartBreaks?: boolean
    autoStartPomodoros?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pomodoroSettings"]>

  export type PomodoroSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workDuration?: boolean
    shortBreakDuration?: boolean
    longBreakDuration?: boolean
    longBreakInterval?: boolean
    dailyGoal?: boolean
    autoStartBreaks?: boolean
    autoStartPomodoros?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pomodoroSettings"]>

  export type PomodoroSettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    workDuration?: boolean
    shortBreakDuration?: boolean
    longBreakDuration?: boolean
    longBreakInterval?: boolean
    dailyGoal?: boolean
    autoStartBreaks?: boolean
    autoStartPomodoros?: boolean
  }

  export type PomodoroSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "workDuration" | "shortBreakDuration" | "longBreakDuration" | "longBreakInterval" | "dailyGoal" | "autoStartBreaks" | "autoStartPomodoros", ExtArgs["result"]["pomodoroSettings"]>
  export type PomodoroSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PomodoroSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PomodoroSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PomodoroSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PomodoroSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      workDuration: number
      shortBreakDuration: number
      longBreakDuration: number
      longBreakInterval: number
      dailyGoal: number
      autoStartBreaks: boolean
      autoStartPomodoros: boolean
    }, ExtArgs["result"]["pomodoroSettings"]>
    composites: {}
  }

  type PomodoroSettingsGetPayload<S extends boolean | null | undefined | PomodoroSettingsDefaultArgs> = $Result.GetResult<Prisma.$PomodoroSettingsPayload, S>

  type PomodoroSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PomodoroSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PomodoroSettingsCountAggregateInputType | true
    }

  export interface PomodoroSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PomodoroSettings'], meta: { name: 'PomodoroSettings' } }
    /**
     * Find zero or one PomodoroSettings that matches the filter.
     * @param {PomodoroSettingsFindUniqueArgs} args - Arguments to find a PomodoroSettings
     * @example
     * // Get one PomodoroSettings
     * const pomodoroSettings = await prisma.pomodoroSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PomodoroSettingsFindUniqueArgs>(args: SelectSubset<T, PomodoroSettingsFindUniqueArgs<ExtArgs>>): Prisma__PomodoroSettingsClient<$Result.GetResult<Prisma.$PomodoroSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PomodoroSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PomodoroSettingsFindUniqueOrThrowArgs} args - Arguments to find a PomodoroSettings
     * @example
     * // Get one PomodoroSettings
     * const pomodoroSettings = await prisma.pomodoroSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PomodoroSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, PomodoroSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PomodoroSettingsClient<$Result.GetResult<Prisma.$PomodoroSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PomodoroSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSettingsFindFirstArgs} args - Arguments to find a PomodoroSettings
     * @example
     * // Get one PomodoroSettings
     * const pomodoroSettings = await prisma.pomodoroSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PomodoroSettingsFindFirstArgs>(args?: SelectSubset<T, PomodoroSettingsFindFirstArgs<ExtArgs>>): Prisma__PomodoroSettingsClient<$Result.GetResult<Prisma.$PomodoroSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PomodoroSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSettingsFindFirstOrThrowArgs} args - Arguments to find a PomodoroSettings
     * @example
     * // Get one PomodoroSettings
     * const pomodoroSettings = await prisma.pomodoroSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PomodoroSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, PomodoroSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PomodoroSettingsClient<$Result.GetResult<Prisma.$PomodoroSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PomodoroSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PomodoroSettings
     * const pomodoroSettings = await prisma.pomodoroSettings.findMany()
     * 
     * // Get first 10 PomodoroSettings
     * const pomodoroSettings = await prisma.pomodoroSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pomodoroSettingsWithIdOnly = await prisma.pomodoroSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PomodoroSettingsFindManyArgs>(args?: SelectSubset<T, PomodoroSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomodoroSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PomodoroSettings.
     * @param {PomodoroSettingsCreateArgs} args - Arguments to create a PomodoroSettings.
     * @example
     * // Create one PomodoroSettings
     * const PomodoroSettings = await prisma.pomodoroSettings.create({
     *   data: {
     *     // ... data to create a PomodoroSettings
     *   }
     * })
     * 
     */
    create<T extends PomodoroSettingsCreateArgs>(args: SelectSubset<T, PomodoroSettingsCreateArgs<ExtArgs>>): Prisma__PomodoroSettingsClient<$Result.GetResult<Prisma.$PomodoroSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PomodoroSettings.
     * @param {PomodoroSettingsCreateManyArgs} args - Arguments to create many PomodoroSettings.
     * @example
     * // Create many PomodoroSettings
     * const pomodoroSettings = await prisma.pomodoroSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PomodoroSettingsCreateManyArgs>(args?: SelectSubset<T, PomodoroSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PomodoroSettings and returns the data saved in the database.
     * @param {PomodoroSettingsCreateManyAndReturnArgs} args - Arguments to create many PomodoroSettings.
     * @example
     * // Create many PomodoroSettings
     * const pomodoroSettings = await prisma.pomodoroSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PomodoroSettings and only return the `id`
     * const pomodoroSettingsWithIdOnly = await prisma.pomodoroSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PomodoroSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, PomodoroSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomodoroSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PomodoroSettings.
     * @param {PomodoroSettingsDeleteArgs} args - Arguments to delete one PomodoroSettings.
     * @example
     * // Delete one PomodoroSettings
     * const PomodoroSettings = await prisma.pomodoroSettings.delete({
     *   where: {
     *     // ... filter to delete one PomodoroSettings
     *   }
     * })
     * 
     */
    delete<T extends PomodoroSettingsDeleteArgs>(args: SelectSubset<T, PomodoroSettingsDeleteArgs<ExtArgs>>): Prisma__PomodoroSettingsClient<$Result.GetResult<Prisma.$PomodoroSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PomodoroSettings.
     * @param {PomodoroSettingsUpdateArgs} args - Arguments to update one PomodoroSettings.
     * @example
     * // Update one PomodoroSettings
     * const pomodoroSettings = await prisma.pomodoroSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PomodoroSettingsUpdateArgs>(args: SelectSubset<T, PomodoroSettingsUpdateArgs<ExtArgs>>): Prisma__PomodoroSettingsClient<$Result.GetResult<Prisma.$PomodoroSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PomodoroSettings.
     * @param {PomodoroSettingsDeleteManyArgs} args - Arguments to filter PomodoroSettings to delete.
     * @example
     * // Delete a few PomodoroSettings
     * const { count } = await prisma.pomodoroSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PomodoroSettingsDeleteManyArgs>(args?: SelectSubset<T, PomodoroSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PomodoroSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PomodoroSettings
     * const pomodoroSettings = await prisma.pomodoroSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PomodoroSettingsUpdateManyArgs>(args: SelectSubset<T, PomodoroSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PomodoroSettings and returns the data updated in the database.
     * @param {PomodoroSettingsUpdateManyAndReturnArgs} args - Arguments to update many PomodoroSettings.
     * @example
     * // Update many PomodoroSettings
     * const pomodoroSettings = await prisma.pomodoroSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PomodoroSettings and only return the `id`
     * const pomodoroSettingsWithIdOnly = await prisma.pomodoroSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PomodoroSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, PomodoroSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomodoroSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PomodoroSettings.
     * @param {PomodoroSettingsUpsertArgs} args - Arguments to update or create a PomodoroSettings.
     * @example
     * // Update or create a PomodoroSettings
     * const pomodoroSettings = await prisma.pomodoroSettings.upsert({
     *   create: {
     *     // ... data to create a PomodoroSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PomodoroSettings we want to update
     *   }
     * })
     */
    upsert<T extends PomodoroSettingsUpsertArgs>(args: SelectSubset<T, PomodoroSettingsUpsertArgs<ExtArgs>>): Prisma__PomodoroSettingsClient<$Result.GetResult<Prisma.$PomodoroSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PomodoroSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSettingsCountArgs} args - Arguments to filter PomodoroSettings to count.
     * @example
     * // Count the number of PomodoroSettings
     * const count = await prisma.pomodoroSettings.count({
     *   where: {
     *     // ... the filter for the PomodoroSettings we want to count
     *   }
     * })
    **/
    count<T extends PomodoroSettingsCountArgs>(
      args?: Subset<T, PomodoroSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PomodoroSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PomodoroSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PomodoroSettingsAggregateArgs>(args: Subset<T, PomodoroSettingsAggregateArgs>): Prisma.PrismaPromise<GetPomodoroSettingsAggregateType<T>>

    /**
     * Group by PomodoroSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomodoroSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PomodoroSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PomodoroSettingsGroupByArgs['orderBy'] }
        : { orderBy?: PomodoroSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PomodoroSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPomodoroSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PomodoroSettings model
   */
  readonly fields: PomodoroSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PomodoroSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PomodoroSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PomodoroSettings model
   */
  interface PomodoroSettingsFieldRefs {
    readonly id: FieldRef<"PomodoroSettings", 'String'>
    readonly userId: FieldRef<"PomodoroSettings", 'String'>
    readonly workDuration: FieldRef<"PomodoroSettings", 'Int'>
    readonly shortBreakDuration: FieldRef<"PomodoroSettings", 'Int'>
    readonly longBreakDuration: FieldRef<"PomodoroSettings", 'Int'>
    readonly longBreakInterval: FieldRef<"PomodoroSettings", 'Int'>
    readonly dailyGoal: FieldRef<"PomodoroSettings", 'Int'>
    readonly autoStartBreaks: FieldRef<"PomodoroSettings", 'Boolean'>
    readonly autoStartPomodoros: FieldRef<"PomodoroSettings", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PomodoroSettings findUnique
   */
  export type PomodoroSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSettings
     */
    select?: PomodoroSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSettings
     */
    omit?: PomodoroSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroSettings to fetch.
     */
    where: PomodoroSettingsWhereUniqueInput
  }

  /**
   * PomodoroSettings findUniqueOrThrow
   */
  export type PomodoroSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSettings
     */
    select?: PomodoroSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSettings
     */
    omit?: PomodoroSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroSettings to fetch.
     */
    where: PomodoroSettingsWhereUniqueInput
  }

  /**
   * PomodoroSettings findFirst
   */
  export type PomodoroSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSettings
     */
    select?: PomodoroSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSettings
     */
    omit?: PomodoroSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroSettings to fetch.
     */
    where?: PomodoroSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroSettings to fetch.
     */
    orderBy?: PomodoroSettingsOrderByWithRelationInput | PomodoroSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PomodoroSettings.
     */
    cursor?: PomodoroSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PomodoroSettings.
     */
    distinct?: PomodoroSettingsScalarFieldEnum | PomodoroSettingsScalarFieldEnum[]
  }

  /**
   * PomodoroSettings findFirstOrThrow
   */
  export type PomodoroSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSettings
     */
    select?: PomodoroSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSettings
     */
    omit?: PomodoroSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroSettings to fetch.
     */
    where?: PomodoroSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroSettings to fetch.
     */
    orderBy?: PomodoroSettingsOrderByWithRelationInput | PomodoroSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PomodoroSettings.
     */
    cursor?: PomodoroSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PomodoroSettings.
     */
    distinct?: PomodoroSettingsScalarFieldEnum | PomodoroSettingsScalarFieldEnum[]
  }

  /**
   * PomodoroSettings findMany
   */
  export type PomodoroSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSettings
     */
    select?: PomodoroSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSettings
     */
    omit?: PomodoroSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PomodoroSettings to fetch.
     */
    where?: PomodoroSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PomodoroSettings to fetch.
     */
    orderBy?: PomodoroSettingsOrderByWithRelationInput | PomodoroSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PomodoroSettings.
     */
    cursor?: PomodoroSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PomodoroSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PomodoroSettings.
     */
    skip?: number
    distinct?: PomodoroSettingsScalarFieldEnum | PomodoroSettingsScalarFieldEnum[]
  }

  /**
   * PomodoroSettings create
   */
  export type PomodoroSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSettings
     */
    select?: PomodoroSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSettings
     */
    omit?: PomodoroSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a PomodoroSettings.
     */
    data: XOR<PomodoroSettingsCreateInput, PomodoroSettingsUncheckedCreateInput>
  }

  /**
   * PomodoroSettings createMany
   */
  export type PomodoroSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PomodoroSettings.
     */
    data: PomodoroSettingsCreateManyInput | PomodoroSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PomodoroSettings createManyAndReturn
   */
  export type PomodoroSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSettings
     */
    select?: PomodoroSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSettings
     */
    omit?: PomodoroSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many PomodoroSettings.
     */
    data: PomodoroSettingsCreateManyInput | PomodoroSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PomodoroSettings update
   */
  export type PomodoroSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSettings
     */
    select?: PomodoroSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSettings
     */
    omit?: PomodoroSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a PomodoroSettings.
     */
    data: XOR<PomodoroSettingsUpdateInput, PomodoroSettingsUncheckedUpdateInput>
    /**
     * Choose, which PomodoroSettings to update.
     */
    where: PomodoroSettingsWhereUniqueInput
  }

  /**
   * PomodoroSettings updateMany
   */
  export type PomodoroSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PomodoroSettings.
     */
    data: XOR<PomodoroSettingsUpdateManyMutationInput, PomodoroSettingsUncheckedUpdateManyInput>
    /**
     * Filter which PomodoroSettings to update
     */
    where?: PomodoroSettingsWhereInput
    /**
     * Limit how many PomodoroSettings to update.
     */
    limit?: number
  }

  /**
   * PomodoroSettings updateManyAndReturn
   */
  export type PomodoroSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSettings
     */
    select?: PomodoroSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSettings
     */
    omit?: PomodoroSettingsOmit<ExtArgs> | null
    /**
     * The data used to update PomodoroSettings.
     */
    data: XOR<PomodoroSettingsUpdateManyMutationInput, PomodoroSettingsUncheckedUpdateManyInput>
    /**
     * Filter which PomodoroSettings to update
     */
    where?: PomodoroSettingsWhereInput
    /**
     * Limit how many PomodoroSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PomodoroSettings upsert
   */
  export type PomodoroSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSettings
     */
    select?: PomodoroSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSettings
     */
    omit?: PomodoroSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the PomodoroSettings to update in case it exists.
     */
    where: PomodoroSettingsWhereUniqueInput
    /**
     * In case the PomodoroSettings found by the `where` argument doesn't exist, create a new PomodoroSettings with this data.
     */
    create: XOR<PomodoroSettingsCreateInput, PomodoroSettingsUncheckedCreateInput>
    /**
     * In case the PomodoroSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PomodoroSettingsUpdateInput, PomodoroSettingsUncheckedUpdateInput>
  }

  /**
   * PomodoroSettings delete
   */
  export type PomodoroSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSettings
     */
    select?: PomodoroSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSettings
     */
    omit?: PomodoroSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSettingsInclude<ExtArgs> | null
    /**
     * Filter which PomodoroSettings to delete.
     */
    where: PomodoroSettingsWhereUniqueInput
  }

  /**
   * PomodoroSettings deleteMany
   */
  export type PomodoroSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PomodoroSettings to delete
     */
    where?: PomodoroSettingsWhereInput
    /**
     * Limit how many PomodoroSettings to delete.
     */
    limit?: number
  }

  /**
   * PomodoroSettings without action
   */
  export type PomodoroSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PomodoroSettings
     */
    select?: PomodoroSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PomodoroSettings
     */
    omit?: PomodoroSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomodoroSettingsInclude<ExtArgs> | null
  }


  /**
   * Model DailyFocusStats
   */

  export type AggregateDailyFocusStats = {
    _count: DailyFocusStatsCountAggregateOutputType | null
    _avg: DailyFocusStatsAvgAggregateOutputType | null
    _sum: DailyFocusStatsSumAggregateOutputType | null
    _min: DailyFocusStatsMinAggregateOutputType | null
    _max: DailyFocusStatsMaxAggregateOutputType | null
  }

  export type DailyFocusStatsAvgAggregateOutputType = {
    totalFocusMinutes: number | null
    sessionsCompleted: number | null
  }

  export type DailyFocusStatsSumAggregateOutputType = {
    totalFocusMinutes: number | null
    sessionsCompleted: number | null
  }

  export type DailyFocusStatsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    totalFocusMinutes: number | null
    sessionsCompleted: number | null
  }

  export type DailyFocusStatsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    totalFocusMinutes: number | null
    sessionsCompleted: number | null
  }

  export type DailyFocusStatsCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    totalFocusMinutes: number
    sessionsCompleted: number
    _all: number
  }


  export type DailyFocusStatsAvgAggregateInputType = {
    totalFocusMinutes?: true
    sessionsCompleted?: true
  }

  export type DailyFocusStatsSumAggregateInputType = {
    totalFocusMinutes?: true
    sessionsCompleted?: true
  }

  export type DailyFocusStatsMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    totalFocusMinutes?: true
    sessionsCompleted?: true
  }

  export type DailyFocusStatsMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    totalFocusMinutes?: true
    sessionsCompleted?: true
  }

  export type DailyFocusStatsCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    totalFocusMinutes?: true
    sessionsCompleted?: true
    _all?: true
  }

  export type DailyFocusStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyFocusStats to aggregate.
     */
    where?: DailyFocusStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyFocusStats to fetch.
     */
    orderBy?: DailyFocusStatsOrderByWithRelationInput | DailyFocusStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyFocusStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyFocusStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyFocusStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyFocusStats
    **/
    _count?: true | DailyFocusStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyFocusStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyFocusStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyFocusStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyFocusStatsMaxAggregateInputType
  }

  export type GetDailyFocusStatsAggregateType<T extends DailyFocusStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyFocusStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyFocusStats[P]>
      : GetScalarType<T[P], AggregateDailyFocusStats[P]>
  }




  export type DailyFocusStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyFocusStatsWhereInput
    orderBy?: DailyFocusStatsOrderByWithAggregationInput | DailyFocusStatsOrderByWithAggregationInput[]
    by: DailyFocusStatsScalarFieldEnum[] | DailyFocusStatsScalarFieldEnum
    having?: DailyFocusStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyFocusStatsCountAggregateInputType | true
    _avg?: DailyFocusStatsAvgAggregateInputType
    _sum?: DailyFocusStatsSumAggregateInputType
    _min?: DailyFocusStatsMinAggregateInputType
    _max?: DailyFocusStatsMaxAggregateInputType
  }

  export type DailyFocusStatsGroupByOutputType = {
    id: string
    userId: string
    date: Date
    totalFocusMinutes: number
    sessionsCompleted: number
    _count: DailyFocusStatsCountAggregateOutputType | null
    _avg: DailyFocusStatsAvgAggregateOutputType | null
    _sum: DailyFocusStatsSumAggregateOutputType | null
    _min: DailyFocusStatsMinAggregateOutputType | null
    _max: DailyFocusStatsMaxAggregateOutputType | null
  }

  type GetDailyFocusStatsGroupByPayload<T extends DailyFocusStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyFocusStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyFocusStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyFocusStatsGroupByOutputType[P]>
            : GetScalarType<T[P], DailyFocusStatsGroupByOutputType[P]>
        }
      >
    >


  export type DailyFocusStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    totalFocusMinutes?: boolean
    sessionsCompleted?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyFocusStats"]>

  export type DailyFocusStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    totalFocusMinutes?: boolean
    sessionsCompleted?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyFocusStats"]>

  export type DailyFocusStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    totalFocusMinutes?: boolean
    sessionsCompleted?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyFocusStats"]>

  export type DailyFocusStatsSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    totalFocusMinutes?: boolean
    sessionsCompleted?: boolean
  }

  export type DailyFocusStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "totalFocusMinutes" | "sessionsCompleted", ExtArgs["result"]["dailyFocusStats"]>
  export type DailyFocusStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyFocusStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyFocusStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyFocusStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyFocusStats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      totalFocusMinutes: number
      sessionsCompleted: number
    }, ExtArgs["result"]["dailyFocusStats"]>
    composites: {}
  }

  type DailyFocusStatsGetPayload<S extends boolean | null | undefined | DailyFocusStatsDefaultArgs> = $Result.GetResult<Prisma.$DailyFocusStatsPayload, S>

  type DailyFocusStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyFocusStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyFocusStatsCountAggregateInputType | true
    }

  export interface DailyFocusStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyFocusStats'], meta: { name: 'DailyFocusStats' } }
    /**
     * Find zero or one DailyFocusStats that matches the filter.
     * @param {DailyFocusStatsFindUniqueArgs} args - Arguments to find a DailyFocusStats
     * @example
     * // Get one DailyFocusStats
     * const dailyFocusStats = await prisma.dailyFocusStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyFocusStatsFindUniqueArgs>(args: SelectSubset<T, DailyFocusStatsFindUniqueArgs<ExtArgs>>): Prisma__DailyFocusStatsClient<$Result.GetResult<Prisma.$DailyFocusStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyFocusStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyFocusStatsFindUniqueOrThrowArgs} args - Arguments to find a DailyFocusStats
     * @example
     * // Get one DailyFocusStats
     * const dailyFocusStats = await prisma.dailyFocusStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyFocusStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyFocusStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyFocusStatsClient<$Result.GetResult<Prisma.$DailyFocusStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyFocusStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyFocusStatsFindFirstArgs} args - Arguments to find a DailyFocusStats
     * @example
     * // Get one DailyFocusStats
     * const dailyFocusStats = await prisma.dailyFocusStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyFocusStatsFindFirstArgs>(args?: SelectSubset<T, DailyFocusStatsFindFirstArgs<ExtArgs>>): Prisma__DailyFocusStatsClient<$Result.GetResult<Prisma.$DailyFocusStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyFocusStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyFocusStatsFindFirstOrThrowArgs} args - Arguments to find a DailyFocusStats
     * @example
     * // Get one DailyFocusStats
     * const dailyFocusStats = await prisma.dailyFocusStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyFocusStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyFocusStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyFocusStatsClient<$Result.GetResult<Prisma.$DailyFocusStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyFocusStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyFocusStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyFocusStats
     * const dailyFocusStats = await prisma.dailyFocusStats.findMany()
     * 
     * // Get first 10 DailyFocusStats
     * const dailyFocusStats = await prisma.dailyFocusStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyFocusStatsWithIdOnly = await prisma.dailyFocusStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyFocusStatsFindManyArgs>(args?: SelectSubset<T, DailyFocusStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyFocusStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyFocusStats.
     * @param {DailyFocusStatsCreateArgs} args - Arguments to create a DailyFocusStats.
     * @example
     * // Create one DailyFocusStats
     * const DailyFocusStats = await prisma.dailyFocusStats.create({
     *   data: {
     *     // ... data to create a DailyFocusStats
     *   }
     * })
     * 
     */
    create<T extends DailyFocusStatsCreateArgs>(args: SelectSubset<T, DailyFocusStatsCreateArgs<ExtArgs>>): Prisma__DailyFocusStatsClient<$Result.GetResult<Prisma.$DailyFocusStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyFocusStats.
     * @param {DailyFocusStatsCreateManyArgs} args - Arguments to create many DailyFocusStats.
     * @example
     * // Create many DailyFocusStats
     * const dailyFocusStats = await prisma.dailyFocusStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyFocusStatsCreateManyArgs>(args?: SelectSubset<T, DailyFocusStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyFocusStats and returns the data saved in the database.
     * @param {DailyFocusStatsCreateManyAndReturnArgs} args - Arguments to create many DailyFocusStats.
     * @example
     * // Create many DailyFocusStats
     * const dailyFocusStats = await prisma.dailyFocusStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyFocusStats and only return the `id`
     * const dailyFocusStatsWithIdOnly = await prisma.dailyFocusStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyFocusStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyFocusStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyFocusStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyFocusStats.
     * @param {DailyFocusStatsDeleteArgs} args - Arguments to delete one DailyFocusStats.
     * @example
     * // Delete one DailyFocusStats
     * const DailyFocusStats = await prisma.dailyFocusStats.delete({
     *   where: {
     *     // ... filter to delete one DailyFocusStats
     *   }
     * })
     * 
     */
    delete<T extends DailyFocusStatsDeleteArgs>(args: SelectSubset<T, DailyFocusStatsDeleteArgs<ExtArgs>>): Prisma__DailyFocusStatsClient<$Result.GetResult<Prisma.$DailyFocusStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyFocusStats.
     * @param {DailyFocusStatsUpdateArgs} args - Arguments to update one DailyFocusStats.
     * @example
     * // Update one DailyFocusStats
     * const dailyFocusStats = await prisma.dailyFocusStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyFocusStatsUpdateArgs>(args: SelectSubset<T, DailyFocusStatsUpdateArgs<ExtArgs>>): Prisma__DailyFocusStatsClient<$Result.GetResult<Prisma.$DailyFocusStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyFocusStats.
     * @param {DailyFocusStatsDeleteManyArgs} args - Arguments to filter DailyFocusStats to delete.
     * @example
     * // Delete a few DailyFocusStats
     * const { count } = await prisma.dailyFocusStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyFocusStatsDeleteManyArgs>(args?: SelectSubset<T, DailyFocusStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyFocusStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyFocusStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyFocusStats
     * const dailyFocusStats = await prisma.dailyFocusStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyFocusStatsUpdateManyArgs>(args: SelectSubset<T, DailyFocusStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyFocusStats and returns the data updated in the database.
     * @param {DailyFocusStatsUpdateManyAndReturnArgs} args - Arguments to update many DailyFocusStats.
     * @example
     * // Update many DailyFocusStats
     * const dailyFocusStats = await prisma.dailyFocusStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyFocusStats and only return the `id`
     * const dailyFocusStatsWithIdOnly = await prisma.dailyFocusStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyFocusStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyFocusStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyFocusStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyFocusStats.
     * @param {DailyFocusStatsUpsertArgs} args - Arguments to update or create a DailyFocusStats.
     * @example
     * // Update or create a DailyFocusStats
     * const dailyFocusStats = await prisma.dailyFocusStats.upsert({
     *   create: {
     *     // ... data to create a DailyFocusStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyFocusStats we want to update
     *   }
     * })
     */
    upsert<T extends DailyFocusStatsUpsertArgs>(args: SelectSubset<T, DailyFocusStatsUpsertArgs<ExtArgs>>): Prisma__DailyFocusStatsClient<$Result.GetResult<Prisma.$DailyFocusStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyFocusStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyFocusStatsCountArgs} args - Arguments to filter DailyFocusStats to count.
     * @example
     * // Count the number of DailyFocusStats
     * const count = await prisma.dailyFocusStats.count({
     *   where: {
     *     // ... the filter for the DailyFocusStats we want to count
     *   }
     * })
    **/
    count<T extends DailyFocusStatsCountArgs>(
      args?: Subset<T, DailyFocusStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyFocusStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyFocusStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyFocusStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyFocusStatsAggregateArgs>(args: Subset<T, DailyFocusStatsAggregateArgs>): Prisma.PrismaPromise<GetDailyFocusStatsAggregateType<T>>

    /**
     * Group by DailyFocusStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyFocusStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyFocusStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyFocusStatsGroupByArgs['orderBy'] }
        : { orderBy?: DailyFocusStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyFocusStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyFocusStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyFocusStats model
   */
  readonly fields: DailyFocusStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyFocusStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyFocusStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyFocusStats model
   */
  interface DailyFocusStatsFieldRefs {
    readonly id: FieldRef<"DailyFocusStats", 'String'>
    readonly userId: FieldRef<"DailyFocusStats", 'String'>
    readonly date: FieldRef<"DailyFocusStats", 'DateTime'>
    readonly totalFocusMinutes: FieldRef<"DailyFocusStats", 'Int'>
    readonly sessionsCompleted: FieldRef<"DailyFocusStats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DailyFocusStats findUnique
   */
  export type DailyFocusStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyFocusStats
     */
    select?: DailyFocusStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyFocusStats
     */
    omit?: DailyFocusStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyFocusStatsInclude<ExtArgs> | null
    /**
     * Filter, which DailyFocusStats to fetch.
     */
    where: DailyFocusStatsWhereUniqueInput
  }

  /**
   * DailyFocusStats findUniqueOrThrow
   */
  export type DailyFocusStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyFocusStats
     */
    select?: DailyFocusStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyFocusStats
     */
    omit?: DailyFocusStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyFocusStatsInclude<ExtArgs> | null
    /**
     * Filter, which DailyFocusStats to fetch.
     */
    where: DailyFocusStatsWhereUniqueInput
  }

  /**
   * DailyFocusStats findFirst
   */
  export type DailyFocusStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyFocusStats
     */
    select?: DailyFocusStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyFocusStats
     */
    omit?: DailyFocusStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyFocusStatsInclude<ExtArgs> | null
    /**
     * Filter, which DailyFocusStats to fetch.
     */
    where?: DailyFocusStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyFocusStats to fetch.
     */
    orderBy?: DailyFocusStatsOrderByWithRelationInput | DailyFocusStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyFocusStats.
     */
    cursor?: DailyFocusStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyFocusStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyFocusStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyFocusStats.
     */
    distinct?: DailyFocusStatsScalarFieldEnum | DailyFocusStatsScalarFieldEnum[]
  }

  /**
   * DailyFocusStats findFirstOrThrow
   */
  export type DailyFocusStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyFocusStats
     */
    select?: DailyFocusStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyFocusStats
     */
    omit?: DailyFocusStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyFocusStatsInclude<ExtArgs> | null
    /**
     * Filter, which DailyFocusStats to fetch.
     */
    where?: DailyFocusStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyFocusStats to fetch.
     */
    orderBy?: DailyFocusStatsOrderByWithRelationInput | DailyFocusStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyFocusStats.
     */
    cursor?: DailyFocusStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyFocusStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyFocusStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyFocusStats.
     */
    distinct?: DailyFocusStatsScalarFieldEnum | DailyFocusStatsScalarFieldEnum[]
  }

  /**
   * DailyFocusStats findMany
   */
  export type DailyFocusStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyFocusStats
     */
    select?: DailyFocusStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyFocusStats
     */
    omit?: DailyFocusStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyFocusStatsInclude<ExtArgs> | null
    /**
     * Filter, which DailyFocusStats to fetch.
     */
    where?: DailyFocusStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyFocusStats to fetch.
     */
    orderBy?: DailyFocusStatsOrderByWithRelationInput | DailyFocusStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyFocusStats.
     */
    cursor?: DailyFocusStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyFocusStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyFocusStats.
     */
    skip?: number
    distinct?: DailyFocusStatsScalarFieldEnum | DailyFocusStatsScalarFieldEnum[]
  }

  /**
   * DailyFocusStats create
   */
  export type DailyFocusStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyFocusStats
     */
    select?: DailyFocusStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyFocusStats
     */
    omit?: DailyFocusStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyFocusStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyFocusStats.
     */
    data: XOR<DailyFocusStatsCreateInput, DailyFocusStatsUncheckedCreateInput>
  }

  /**
   * DailyFocusStats createMany
   */
  export type DailyFocusStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyFocusStats.
     */
    data: DailyFocusStatsCreateManyInput | DailyFocusStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyFocusStats createManyAndReturn
   */
  export type DailyFocusStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyFocusStats
     */
    select?: DailyFocusStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyFocusStats
     */
    omit?: DailyFocusStatsOmit<ExtArgs> | null
    /**
     * The data used to create many DailyFocusStats.
     */
    data: DailyFocusStatsCreateManyInput | DailyFocusStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyFocusStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyFocusStats update
   */
  export type DailyFocusStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyFocusStats
     */
    select?: DailyFocusStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyFocusStats
     */
    omit?: DailyFocusStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyFocusStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyFocusStats.
     */
    data: XOR<DailyFocusStatsUpdateInput, DailyFocusStatsUncheckedUpdateInput>
    /**
     * Choose, which DailyFocusStats to update.
     */
    where: DailyFocusStatsWhereUniqueInput
  }

  /**
   * DailyFocusStats updateMany
   */
  export type DailyFocusStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyFocusStats.
     */
    data: XOR<DailyFocusStatsUpdateManyMutationInput, DailyFocusStatsUncheckedUpdateManyInput>
    /**
     * Filter which DailyFocusStats to update
     */
    where?: DailyFocusStatsWhereInput
    /**
     * Limit how many DailyFocusStats to update.
     */
    limit?: number
  }

  /**
   * DailyFocusStats updateManyAndReturn
   */
  export type DailyFocusStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyFocusStats
     */
    select?: DailyFocusStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyFocusStats
     */
    omit?: DailyFocusStatsOmit<ExtArgs> | null
    /**
     * The data used to update DailyFocusStats.
     */
    data: XOR<DailyFocusStatsUpdateManyMutationInput, DailyFocusStatsUncheckedUpdateManyInput>
    /**
     * Filter which DailyFocusStats to update
     */
    where?: DailyFocusStatsWhereInput
    /**
     * Limit how many DailyFocusStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyFocusStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyFocusStats upsert
   */
  export type DailyFocusStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyFocusStats
     */
    select?: DailyFocusStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyFocusStats
     */
    omit?: DailyFocusStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyFocusStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyFocusStats to update in case it exists.
     */
    where: DailyFocusStatsWhereUniqueInput
    /**
     * In case the DailyFocusStats found by the `where` argument doesn't exist, create a new DailyFocusStats with this data.
     */
    create: XOR<DailyFocusStatsCreateInput, DailyFocusStatsUncheckedCreateInput>
    /**
     * In case the DailyFocusStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyFocusStatsUpdateInput, DailyFocusStatsUncheckedUpdateInput>
  }

  /**
   * DailyFocusStats delete
   */
  export type DailyFocusStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyFocusStats
     */
    select?: DailyFocusStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyFocusStats
     */
    omit?: DailyFocusStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyFocusStatsInclude<ExtArgs> | null
    /**
     * Filter which DailyFocusStats to delete.
     */
    where: DailyFocusStatsWhereUniqueInput
  }

  /**
   * DailyFocusStats deleteMany
   */
  export type DailyFocusStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyFocusStats to delete
     */
    where?: DailyFocusStatsWhereInput
    /**
     * Limit how many DailyFocusStats to delete.
     */
    limit?: number
  }

  /**
   * DailyFocusStats without action
   */
  export type DailyFocusStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyFocusStats
     */
    select?: DailyFocusStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyFocusStats
     */
    omit?: DailyFocusStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyFocusStatsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    avatarUrl: 'avatarUrl',
    role: 'role',
    plan: 'plan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    googleId: 'googleId',
    password: 'password',
    parentId: 'parentId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PushTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    platform: 'platform',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type PushTokenScalarFieldEnum = (typeof PushTokenScalarFieldEnum)[keyof typeof PushTokenScalarFieldEnum]


  export const ChatSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    createdAt: 'createdAt'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    role: 'role',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const QuestionSolutionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    imageUrl: 'imageUrl',
    ocrText: 'ocrText',
    solution: 'solution',
    lesson: 'lesson',
    createdAt: 'createdAt'
  };

  export type QuestionSolutionScalarFieldEnum = (typeof QuestionSolutionScalarFieldEnum)[keyof typeof QuestionSolutionScalarFieldEnum]


  export const ExamResultScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    examType: 'examType',
    name: 'name',
    date: 'date',
    score: 'score'
  };

  export type ExamResultScalarFieldEnum = (typeof ExamResultScalarFieldEnum)[keyof typeof ExamResultScalarFieldEnum]


  export const ExamDetailScalarFieldEnum: {
    id: 'id',
    examResultId: 'examResultId',
    lesson: 'lesson',
    topic: 'topic',
    correct: 'correct',
    incorrect: 'incorrect',
    empty: 'empty',
    net: 'net'
  };

  export type ExamDetailScalarFieldEnum = (typeof ExamDetailScalarFieldEnum)[keyof typeof ExamDetailScalarFieldEnum]


  export const StudyPlanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    startDate: 'startDate',
    endDate: 'endDate',
    content: 'content',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type StudyPlanScalarFieldEnum = (typeof StudyPlanScalarFieldEnum)[keyof typeof StudyPlanScalarFieldEnum]


  export const PomodoroSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    duration: 'duration',
    lesson: 'lesson',
    topic: 'topic',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    completed: 'completed'
  };

  export type PomodoroSessionScalarFieldEnum = (typeof PomodoroSessionScalarFieldEnum)[keyof typeof PomodoroSessionScalarFieldEnum]


  export const BadgeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    criteriaKey: 'criteriaKey'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const UserBadgeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    badgeId: 'badgeId',
    earnedAt: 'earnedAt'
  };

  export type UserBadgeScalarFieldEnum = (typeof UserBadgeScalarFieldEnum)[keyof typeof UserBadgeScalarFieldEnum]


  export const NotificationSettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    pomodoroNotifications: 'pomodoroNotifications',
    studyPlanReminders: 'studyPlanReminders',
    examAnalysisAlerts: 'examAnalysisAlerts',
    dailyReminders: 'dailyReminders'
  };

  export type NotificationSettingsScalarFieldEnum = (typeof NotificationSettingsScalarFieldEnum)[keyof typeof NotificationSettingsScalarFieldEnum]


  export const PomodoroSettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    workDuration: 'workDuration',
    shortBreakDuration: 'shortBreakDuration',
    longBreakDuration: 'longBreakDuration',
    longBreakInterval: 'longBreakInterval',
    dailyGoal: 'dailyGoal',
    autoStartBreaks: 'autoStartBreaks',
    autoStartPomodoros: 'autoStartPomodoros'
  };

  export type PomodoroSettingsScalarFieldEnum = (typeof PomodoroSettingsScalarFieldEnum)[keyof typeof PomodoroSettingsScalarFieldEnum]


  export const DailyFocusStatsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    totalFocusMinutes: 'totalFocusMinutes',
    sessionsCompleted: 'sessionsCompleted'
  };

  export type DailyFocusStatsScalarFieldEnum = (typeof DailyFocusStatsScalarFieldEnum)[keyof typeof DailyFocusStatsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>
    


  /**
   * Reference to a field of type 'PlanType[]'
   */
  export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ExamType'
   */
  export type EnumExamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamType'>
    


  /**
   * Reference to a field of type 'ExamType[]'
   */
  export type ListEnumExamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    plan?: EnumPlanTypeFilter<"User"> | $Enums.PlanType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    googleId?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    parentId?: StringNullableFilter<"User"> | string | null
    chatSessions?: ChatSessionListRelationFilter
    solutions?: QuestionSolutionListRelationFilter
    examResults?: ExamResultListRelationFilter
    studyPlans?: StudyPlanListRelationFilter
    pomodoroSessions?: PomodoroSessionListRelationFilter
    userBadges?: UserBadgeListRelationFilter
    parent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    students?: UserListRelationFilter
    pushTokens?: PushTokenListRelationFilter
    notificationSettings?: XOR<NotificationSettingsNullableScalarRelationFilter, NotificationSettingsWhereInput> | null
    pomodoroSettings?: XOR<PomodoroSettingsNullableScalarRelationFilter, PomodoroSettingsWhereInput> | null
    dailyFocusStats?: DailyFocusStatsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleId?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    chatSessions?: ChatSessionOrderByRelationAggregateInput
    solutions?: QuestionSolutionOrderByRelationAggregateInput
    examResults?: ExamResultOrderByRelationAggregateInput
    studyPlans?: StudyPlanOrderByRelationAggregateInput
    pomodoroSessions?: PomodoroSessionOrderByRelationAggregateInput
    userBadges?: UserBadgeOrderByRelationAggregateInput
    parent?: UserOrderByWithRelationInput
    students?: UserOrderByRelationAggregateInput
    pushTokens?: PushTokenOrderByRelationAggregateInput
    notificationSettings?: NotificationSettingsOrderByWithRelationInput
    pomodoroSettings?: PomodoroSettingsOrderByWithRelationInput
    dailyFocusStats?: DailyFocusStatsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    plan?: EnumPlanTypeFilter<"User"> | $Enums.PlanType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    password?: StringNullableFilter<"User"> | string | null
    parentId?: StringNullableFilter<"User"> | string | null
    chatSessions?: ChatSessionListRelationFilter
    solutions?: QuestionSolutionListRelationFilter
    examResults?: ExamResultListRelationFilter
    studyPlans?: StudyPlanListRelationFilter
    pomodoroSessions?: PomodoroSessionListRelationFilter
    userBadges?: UserBadgeListRelationFilter
    parent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    students?: UserListRelationFilter
    pushTokens?: PushTokenListRelationFilter
    notificationSettings?: XOR<NotificationSettingsNullableScalarRelationFilter, NotificationSettingsWhereInput> | null
    pomodoroSettings?: XOR<PomodoroSettingsNullableScalarRelationFilter, PomodoroSettingsWhereInput> | null
    dailyFocusStats?: DailyFocusStatsListRelationFilter
  }, "id" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleId?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    plan?: EnumPlanTypeWithAggregatesFilter<"User"> | $Enums.PlanType
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PushTokenWhereInput = {
    AND?: PushTokenWhereInput | PushTokenWhereInput[]
    OR?: PushTokenWhereInput[]
    NOT?: PushTokenWhereInput | PushTokenWhereInput[]
    id?: StringFilter<"PushToken"> | string
    token?: StringFilter<"PushToken"> | string
    platform?: StringFilter<"PushToken"> | string
    userId?: StringFilter<"PushToken"> | string
    createdAt?: DateTimeFilter<"PushToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PushTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PushTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PushTokenWhereInput | PushTokenWhereInput[]
    OR?: PushTokenWhereInput[]
    NOT?: PushTokenWhereInput | PushTokenWhereInput[]
    token?: StringFilter<"PushToken"> | string
    platform?: StringFilter<"PushToken"> | string
    userId?: StringFilter<"PushToken"> | string
    createdAt?: DateTimeFilter<"PushToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PushTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: PushTokenCountOrderByAggregateInput
    _max?: PushTokenMaxOrderByAggregateInput
    _min?: PushTokenMinOrderByAggregateInput
  }

  export type PushTokenScalarWhereWithAggregatesInput = {
    AND?: PushTokenScalarWhereWithAggregatesInput | PushTokenScalarWhereWithAggregatesInput[]
    OR?: PushTokenScalarWhereWithAggregatesInput[]
    NOT?: PushTokenScalarWhereWithAggregatesInput | PushTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PushToken"> | string
    token?: StringWithAggregatesFilter<"PushToken"> | string
    platform?: StringWithAggregatesFilter<"PushToken"> | string
    userId?: StringWithAggregatesFilter<"PushToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PushToken"> | Date | string
  }

  export type ChatSessionWhereInput = {
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    userId?: StringFilter<"ChatSession"> | string
    title?: StringNullableFilter<"ChatSession"> | string | null
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: ChatMessageListRelationFilter
  }

  export type ChatSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    userId?: StringFilter<"ChatSession"> | string
    title?: StringNullableFilter<"ChatSession"> | string | null
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ChatSessionCountOrderByAggregateInput
    _max?: ChatSessionMaxOrderByAggregateInput
    _min?: ChatSessionMinOrderByAggregateInput
  }

  export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    OR?: ChatSessionScalarWhereWithAggregatesInput[]
    NOT?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatSession"> | string
    userId?: StringWithAggregatesFilter<"ChatSession"> | string
    title?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    sessionId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    session?: ChatSessionOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    sessionId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    sessionId?: StringWithAggregatesFilter<"ChatMessage"> | string
    role?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type QuestionSolutionWhereInput = {
    AND?: QuestionSolutionWhereInput | QuestionSolutionWhereInput[]
    OR?: QuestionSolutionWhereInput[]
    NOT?: QuestionSolutionWhereInput | QuestionSolutionWhereInput[]
    id?: StringFilter<"QuestionSolution"> | string
    userId?: StringFilter<"QuestionSolution"> | string
    imageUrl?: StringFilter<"QuestionSolution"> | string
    ocrText?: StringNullableFilter<"QuestionSolution"> | string | null
    solution?: StringNullableFilter<"QuestionSolution"> | string | null
    lesson?: StringNullableFilter<"QuestionSolution"> | string | null
    createdAt?: DateTimeFilter<"QuestionSolution"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type QuestionSolutionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    imageUrl?: SortOrder
    ocrText?: SortOrderInput | SortOrder
    solution?: SortOrderInput | SortOrder
    lesson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type QuestionSolutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionSolutionWhereInput | QuestionSolutionWhereInput[]
    OR?: QuestionSolutionWhereInput[]
    NOT?: QuestionSolutionWhereInput | QuestionSolutionWhereInput[]
    userId?: StringFilter<"QuestionSolution"> | string
    imageUrl?: StringFilter<"QuestionSolution"> | string
    ocrText?: StringNullableFilter<"QuestionSolution"> | string | null
    solution?: StringNullableFilter<"QuestionSolution"> | string | null
    lesson?: StringNullableFilter<"QuestionSolution"> | string | null
    createdAt?: DateTimeFilter<"QuestionSolution"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type QuestionSolutionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    imageUrl?: SortOrder
    ocrText?: SortOrderInput | SortOrder
    solution?: SortOrderInput | SortOrder
    lesson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: QuestionSolutionCountOrderByAggregateInput
    _max?: QuestionSolutionMaxOrderByAggregateInput
    _min?: QuestionSolutionMinOrderByAggregateInput
  }

  export type QuestionSolutionScalarWhereWithAggregatesInput = {
    AND?: QuestionSolutionScalarWhereWithAggregatesInput | QuestionSolutionScalarWhereWithAggregatesInput[]
    OR?: QuestionSolutionScalarWhereWithAggregatesInput[]
    NOT?: QuestionSolutionScalarWhereWithAggregatesInput | QuestionSolutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionSolution"> | string
    userId?: StringWithAggregatesFilter<"QuestionSolution"> | string
    imageUrl?: StringWithAggregatesFilter<"QuestionSolution"> | string
    ocrText?: StringNullableWithAggregatesFilter<"QuestionSolution"> | string | null
    solution?: StringNullableWithAggregatesFilter<"QuestionSolution"> | string | null
    lesson?: StringNullableWithAggregatesFilter<"QuestionSolution"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuestionSolution"> | Date | string
  }

  export type ExamResultWhereInput = {
    AND?: ExamResultWhereInput | ExamResultWhereInput[]
    OR?: ExamResultWhereInput[]
    NOT?: ExamResultWhereInput | ExamResultWhereInput[]
    id?: StringFilter<"ExamResult"> | string
    userId?: StringFilter<"ExamResult"> | string
    examType?: EnumExamTypeFilter<"ExamResult"> | $Enums.ExamType
    name?: StringNullableFilter<"ExamResult"> | string | null
    date?: DateTimeFilter<"ExamResult"> | Date | string
    score?: FloatNullableFilter<"ExamResult"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    details?: ExamDetailListRelationFilter
  }

  export type ExamResultOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    examType?: SortOrder
    name?: SortOrderInput | SortOrder
    date?: SortOrder
    score?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    details?: ExamDetailOrderByRelationAggregateInput
  }

  export type ExamResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamResultWhereInput | ExamResultWhereInput[]
    OR?: ExamResultWhereInput[]
    NOT?: ExamResultWhereInput | ExamResultWhereInput[]
    userId?: StringFilter<"ExamResult"> | string
    examType?: EnumExamTypeFilter<"ExamResult"> | $Enums.ExamType
    name?: StringNullableFilter<"ExamResult"> | string | null
    date?: DateTimeFilter<"ExamResult"> | Date | string
    score?: FloatNullableFilter<"ExamResult"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    details?: ExamDetailListRelationFilter
  }, "id">

  export type ExamResultOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    examType?: SortOrder
    name?: SortOrderInput | SortOrder
    date?: SortOrder
    score?: SortOrderInput | SortOrder
    _count?: ExamResultCountOrderByAggregateInput
    _avg?: ExamResultAvgOrderByAggregateInput
    _max?: ExamResultMaxOrderByAggregateInput
    _min?: ExamResultMinOrderByAggregateInput
    _sum?: ExamResultSumOrderByAggregateInput
  }

  export type ExamResultScalarWhereWithAggregatesInput = {
    AND?: ExamResultScalarWhereWithAggregatesInput | ExamResultScalarWhereWithAggregatesInput[]
    OR?: ExamResultScalarWhereWithAggregatesInput[]
    NOT?: ExamResultScalarWhereWithAggregatesInput | ExamResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExamResult"> | string
    userId?: StringWithAggregatesFilter<"ExamResult"> | string
    examType?: EnumExamTypeWithAggregatesFilter<"ExamResult"> | $Enums.ExamType
    name?: StringNullableWithAggregatesFilter<"ExamResult"> | string | null
    date?: DateTimeWithAggregatesFilter<"ExamResult"> | Date | string
    score?: FloatNullableWithAggregatesFilter<"ExamResult"> | number | null
  }

  export type ExamDetailWhereInput = {
    AND?: ExamDetailWhereInput | ExamDetailWhereInput[]
    OR?: ExamDetailWhereInput[]
    NOT?: ExamDetailWhereInput | ExamDetailWhereInput[]
    id?: StringFilter<"ExamDetail"> | string
    examResultId?: StringFilter<"ExamDetail"> | string
    lesson?: StringFilter<"ExamDetail"> | string
    topic?: StringNullableFilter<"ExamDetail"> | string | null
    correct?: IntFilter<"ExamDetail"> | number
    incorrect?: IntFilter<"ExamDetail"> | number
    empty?: IntFilter<"ExamDetail"> | number
    net?: FloatFilter<"ExamDetail"> | number
    examResult?: XOR<ExamResultScalarRelationFilter, ExamResultWhereInput>
  }

  export type ExamDetailOrderByWithRelationInput = {
    id?: SortOrder
    examResultId?: SortOrder
    lesson?: SortOrder
    topic?: SortOrderInput | SortOrder
    correct?: SortOrder
    incorrect?: SortOrder
    empty?: SortOrder
    net?: SortOrder
    examResult?: ExamResultOrderByWithRelationInput
  }

  export type ExamDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamDetailWhereInput | ExamDetailWhereInput[]
    OR?: ExamDetailWhereInput[]
    NOT?: ExamDetailWhereInput | ExamDetailWhereInput[]
    examResultId?: StringFilter<"ExamDetail"> | string
    lesson?: StringFilter<"ExamDetail"> | string
    topic?: StringNullableFilter<"ExamDetail"> | string | null
    correct?: IntFilter<"ExamDetail"> | number
    incorrect?: IntFilter<"ExamDetail"> | number
    empty?: IntFilter<"ExamDetail"> | number
    net?: FloatFilter<"ExamDetail"> | number
    examResult?: XOR<ExamResultScalarRelationFilter, ExamResultWhereInput>
  }, "id">

  export type ExamDetailOrderByWithAggregationInput = {
    id?: SortOrder
    examResultId?: SortOrder
    lesson?: SortOrder
    topic?: SortOrderInput | SortOrder
    correct?: SortOrder
    incorrect?: SortOrder
    empty?: SortOrder
    net?: SortOrder
    _count?: ExamDetailCountOrderByAggregateInput
    _avg?: ExamDetailAvgOrderByAggregateInput
    _max?: ExamDetailMaxOrderByAggregateInput
    _min?: ExamDetailMinOrderByAggregateInput
    _sum?: ExamDetailSumOrderByAggregateInput
  }

  export type ExamDetailScalarWhereWithAggregatesInput = {
    AND?: ExamDetailScalarWhereWithAggregatesInput | ExamDetailScalarWhereWithAggregatesInput[]
    OR?: ExamDetailScalarWhereWithAggregatesInput[]
    NOT?: ExamDetailScalarWhereWithAggregatesInput | ExamDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExamDetail"> | string
    examResultId?: StringWithAggregatesFilter<"ExamDetail"> | string
    lesson?: StringWithAggregatesFilter<"ExamDetail"> | string
    topic?: StringNullableWithAggregatesFilter<"ExamDetail"> | string | null
    correct?: IntWithAggregatesFilter<"ExamDetail"> | number
    incorrect?: IntWithAggregatesFilter<"ExamDetail"> | number
    empty?: IntWithAggregatesFilter<"ExamDetail"> | number
    net?: FloatWithAggregatesFilter<"ExamDetail"> | number
  }

  export type StudyPlanWhereInput = {
    AND?: StudyPlanWhereInput | StudyPlanWhereInput[]
    OR?: StudyPlanWhereInput[]
    NOT?: StudyPlanWhereInput | StudyPlanWhereInput[]
    id?: StringFilter<"StudyPlan"> | string
    userId?: StringFilter<"StudyPlan"> | string
    startDate?: DateTimeFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeFilter<"StudyPlan"> | Date | string
    content?: StringFilter<"StudyPlan"> | string
    status?: StringFilter<"StudyPlan"> | string
    createdAt?: DateTimeFilter<"StudyPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StudyPlanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    content?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StudyPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudyPlanWhereInput | StudyPlanWhereInput[]
    OR?: StudyPlanWhereInput[]
    NOT?: StudyPlanWhereInput | StudyPlanWhereInput[]
    userId?: StringFilter<"StudyPlan"> | string
    startDate?: DateTimeFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeFilter<"StudyPlan"> | Date | string
    content?: StringFilter<"StudyPlan"> | string
    status?: StringFilter<"StudyPlan"> | string
    createdAt?: DateTimeFilter<"StudyPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StudyPlanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    content?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: StudyPlanCountOrderByAggregateInput
    _max?: StudyPlanMaxOrderByAggregateInput
    _min?: StudyPlanMinOrderByAggregateInput
  }

  export type StudyPlanScalarWhereWithAggregatesInput = {
    AND?: StudyPlanScalarWhereWithAggregatesInput | StudyPlanScalarWhereWithAggregatesInput[]
    OR?: StudyPlanScalarWhereWithAggregatesInput[]
    NOT?: StudyPlanScalarWhereWithAggregatesInput | StudyPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudyPlan"> | string
    userId?: StringWithAggregatesFilter<"StudyPlan"> | string
    startDate?: DateTimeWithAggregatesFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"StudyPlan"> | Date | string
    content?: StringWithAggregatesFilter<"StudyPlan"> | string
    status?: StringWithAggregatesFilter<"StudyPlan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StudyPlan"> | Date | string
  }

  export type PomodoroSessionWhereInput = {
    AND?: PomodoroSessionWhereInput | PomodoroSessionWhereInput[]
    OR?: PomodoroSessionWhereInput[]
    NOT?: PomodoroSessionWhereInput | PomodoroSessionWhereInput[]
    id?: StringFilter<"PomodoroSession"> | string
    userId?: StringFilter<"PomodoroSession"> | string
    duration?: IntFilter<"PomodoroSession"> | number
    lesson?: StringNullableFilter<"PomodoroSession"> | string | null
    topic?: StringNullableFilter<"PomodoroSession"> | string | null
    startedAt?: DateTimeFilter<"PomodoroSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"PomodoroSession"> | Date | string | null
    completed?: BoolFilter<"PomodoroSession"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PomodoroSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    lesson?: SortOrderInput | SortOrder
    topic?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    completed?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PomodoroSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PomodoroSessionWhereInput | PomodoroSessionWhereInput[]
    OR?: PomodoroSessionWhereInput[]
    NOT?: PomodoroSessionWhereInput | PomodoroSessionWhereInput[]
    userId?: StringFilter<"PomodoroSession"> | string
    duration?: IntFilter<"PomodoroSession"> | number
    lesson?: StringNullableFilter<"PomodoroSession"> | string | null
    topic?: StringNullableFilter<"PomodoroSession"> | string | null
    startedAt?: DateTimeFilter<"PomodoroSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"PomodoroSession"> | Date | string | null
    completed?: BoolFilter<"PomodoroSession"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PomodoroSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    lesson?: SortOrderInput | SortOrder
    topic?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    completed?: SortOrder
    _count?: PomodoroSessionCountOrderByAggregateInput
    _avg?: PomodoroSessionAvgOrderByAggregateInput
    _max?: PomodoroSessionMaxOrderByAggregateInput
    _min?: PomodoroSessionMinOrderByAggregateInput
    _sum?: PomodoroSessionSumOrderByAggregateInput
  }

  export type PomodoroSessionScalarWhereWithAggregatesInput = {
    AND?: PomodoroSessionScalarWhereWithAggregatesInput | PomodoroSessionScalarWhereWithAggregatesInput[]
    OR?: PomodoroSessionScalarWhereWithAggregatesInput[]
    NOT?: PomodoroSessionScalarWhereWithAggregatesInput | PomodoroSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PomodoroSession"> | string
    userId?: StringWithAggregatesFilter<"PomodoroSession"> | string
    duration?: IntWithAggregatesFilter<"PomodoroSession"> | number
    lesson?: StringNullableWithAggregatesFilter<"PomodoroSession"> | string | null
    topic?: StringNullableWithAggregatesFilter<"PomodoroSession"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"PomodoroSession"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"PomodoroSession"> | Date | string | null
    completed?: BoolWithAggregatesFilter<"PomodoroSession"> | boolean
  }

  export type BadgeWhereInput = {
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    id?: StringFilter<"Badge"> | string
    name?: StringFilter<"Badge"> | string
    description?: StringFilter<"Badge"> | string
    imageUrl?: StringNullableFilter<"Badge"> | string | null
    criteriaKey?: StringNullableFilter<"Badge"> | string | null
    userBadges?: UserBadgeListRelationFilter
  }

  export type BadgeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    criteriaKey?: SortOrderInput | SortOrder
    userBadges?: UserBadgeOrderByRelationAggregateInput
  }

  export type BadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    criteriaKey?: string
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    description?: StringFilter<"Badge"> | string
    imageUrl?: StringNullableFilter<"Badge"> | string | null
    userBadges?: UserBadgeListRelationFilter
  }, "id" | "name" | "criteriaKey">

  export type BadgeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    criteriaKey?: SortOrderInput | SortOrder
    _count?: BadgeCountOrderByAggregateInput
    _max?: BadgeMaxOrderByAggregateInput
    _min?: BadgeMinOrderByAggregateInput
  }

  export type BadgeScalarWhereWithAggregatesInput = {
    AND?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    OR?: BadgeScalarWhereWithAggregatesInput[]
    NOT?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Badge"> | string
    name?: StringWithAggregatesFilter<"Badge"> | string
    description?: StringWithAggregatesFilter<"Badge"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Badge"> | string | null
    criteriaKey?: StringNullableWithAggregatesFilter<"Badge"> | string | null
  }

  export type UserBadgeWhereInput = {
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    id?: StringFilter<"UserBadge"> | string
    userId?: StringFilter<"UserBadge"> | string
    badgeId?: StringFilter<"UserBadge"> | string
    earnedAt?: DateTimeFilter<"UserBadge"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    badge?: XOR<BadgeScalarRelationFilter, BadgeWhereInput>
  }

  export type UserBadgeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    badge?: BadgeOrderByWithRelationInput
  }

  export type UserBadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    userId?: StringFilter<"UserBadge"> | string
    badgeId?: StringFilter<"UserBadge"> | string
    earnedAt?: DateTimeFilter<"UserBadge"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    badge?: XOR<BadgeScalarRelationFilter, BadgeWhereInput>
  }, "id">

  export type UserBadgeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
    _count?: UserBadgeCountOrderByAggregateInput
    _max?: UserBadgeMaxOrderByAggregateInput
    _min?: UserBadgeMinOrderByAggregateInput
  }

  export type UserBadgeScalarWhereWithAggregatesInput = {
    AND?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    OR?: UserBadgeScalarWhereWithAggregatesInput[]
    NOT?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserBadge"> | string
    userId?: StringWithAggregatesFilter<"UserBadge"> | string
    badgeId?: StringWithAggregatesFilter<"UserBadge"> | string
    earnedAt?: DateTimeWithAggregatesFilter<"UserBadge"> | Date | string
  }

  export type NotificationSettingsWhereInput = {
    AND?: NotificationSettingsWhereInput | NotificationSettingsWhereInput[]
    OR?: NotificationSettingsWhereInput[]
    NOT?: NotificationSettingsWhereInput | NotificationSettingsWhereInput[]
    id?: StringFilter<"NotificationSettings"> | string
    userId?: StringFilter<"NotificationSettings"> | string
    pomodoroNotifications?: StringFilter<"NotificationSettings"> | string
    studyPlanReminders?: BoolFilter<"NotificationSettings"> | boolean
    examAnalysisAlerts?: BoolFilter<"NotificationSettings"> | boolean
    dailyReminders?: BoolFilter<"NotificationSettings"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationSettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    pomodoroNotifications?: SortOrder
    studyPlanReminders?: SortOrder
    examAnalysisAlerts?: SortOrder
    dailyReminders?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: NotificationSettingsWhereInput | NotificationSettingsWhereInput[]
    OR?: NotificationSettingsWhereInput[]
    NOT?: NotificationSettingsWhereInput | NotificationSettingsWhereInput[]
    pomodoroNotifications?: StringFilter<"NotificationSettings"> | string
    studyPlanReminders?: BoolFilter<"NotificationSettings"> | boolean
    examAnalysisAlerts?: BoolFilter<"NotificationSettings"> | boolean
    dailyReminders?: BoolFilter<"NotificationSettings"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type NotificationSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    pomodoroNotifications?: SortOrder
    studyPlanReminders?: SortOrder
    examAnalysisAlerts?: SortOrder
    dailyReminders?: SortOrder
    _count?: NotificationSettingsCountOrderByAggregateInput
    _max?: NotificationSettingsMaxOrderByAggregateInput
    _min?: NotificationSettingsMinOrderByAggregateInput
  }

  export type NotificationSettingsScalarWhereWithAggregatesInput = {
    AND?: NotificationSettingsScalarWhereWithAggregatesInput | NotificationSettingsScalarWhereWithAggregatesInput[]
    OR?: NotificationSettingsScalarWhereWithAggregatesInput[]
    NOT?: NotificationSettingsScalarWhereWithAggregatesInput | NotificationSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationSettings"> | string
    userId?: StringWithAggregatesFilter<"NotificationSettings"> | string
    pomodoroNotifications?: StringWithAggregatesFilter<"NotificationSettings"> | string
    studyPlanReminders?: BoolWithAggregatesFilter<"NotificationSettings"> | boolean
    examAnalysisAlerts?: BoolWithAggregatesFilter<"NotificationSettings"> | boolean
    dailyReminders?: BoolWithAggregatesFilter<"NotificationSettings"> | boolean
  }

  export type PomodoroSettingsWhereInput = {
    AND?: PomodoroSettingsWhereInput | PomodoroSettingsWhereInput[]
    OR?: PomodoroSettingsWhereInput[]
    NOT?: PomodoroSettingsWhereInput | PomodoroSettingsWhereInput[]
    id?: StringFilter<"PomodoroSettings"> | string
    userId?: StringFilter<"PomodoroSettings"> | string
    workDuration?: IntFilter<"PomodoroSettings"> | number
    shortBreakDuration?: IntFilter<"PomodoroSettings"> | number
    longBreakDuration?: IntFilter<"PomodoroSettings"> | number
    longBreakInterval?: IntFilter<"PomodoroSettings"> | number
    dailyGoal?: IntFilter<"PomodoroSettings"> | number
    autoStartBreaks?: BoolFilter<"PomodoroSettings"> | boolean
    autoStartPomodoros?: BoolFilter<"PomodoroSettings"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PomodoroSettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    workDuration?: SortOrder
    shortBreakDuration?: SortOrder
    longBreakDuration?: SortOrder
    longBreakInterval?: SortOrder
    dailyGoal?: SortOrder
    autoStartBreaks?: SortOrder
    autoStartPomodoros?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PomodoroSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PomodoroSettingsWhereInput | PomodoroSettingsWhereInput[]
    OR?: PomodoroSettingsWhereInput[]
    NOT?: PomodoroSettingsWhereInput | PomodoroSettingsWhereInput[]
    workDuration?: IntFilter<"PomodoroSettings"> | number
    shortBreakDuration?: IntFilter<"PomodoroSettings"> | number
    longBreakDuration?: IntFilter<"PomodoroSettings"> | number
    longBreakInterval?: IntFilter<"PomodoroSettings"> | number
    dailyGoal?: IntFilter<"PomodoroSettings"> | number
    autoStartBreaks?: BoolFilter<"PomodoroSettings"> | boolean
    autoStartPomodoros?: BoolFilter<"PomodoroSettings"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type PomodoroSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    workDuration?: SortOrder
    shortBreakDuration?: SortOrder
    longBreakDuration?: SortOrder
    longBreakInterval?: SortOrder
    dailyGoal?: SortOrder
    autoStartBreaks?: SortOrder
    autoStartPomodoros?: SortOrder
    _count?: PomodoroSettingsCountOrderByAggregateInput
    _avg?: PomodoroSettingsAvgOrderByAggregateInput
    _max?: PomodoroSettingsMaxOrderByAggregateInput
    _min?: PomodoroSettingsMinOrderByAggregateInput
    _sum?: PomodoroSettingsSumOrderByAggregateInput
  }

  export type PomodoroSettingsScalarWhereWithAggregatesInput = {
    AND?: PomodoroSettingsScalarWhereWithAggregatesInput | PomodoroSettingsScalarWhereWithAggregatesInput[]
    OR?: PomodoroSettingsScalarWhereWithAggregatesInput[]
    NOT?: PomodoroSettingsScalarWhereWithAggregatesInput | PomodoroSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PomodoroSettings"> | string
    userId?: StringWithAggregatesFilter<"PomodoroSettings"> | string
    workDuration?: IntWithAggregatesFilter<"PomodoroSettings"> | number
    shortBreakDuration?: IntWithAggregatesFilter<"PomodoroSettings"> | number
    longBreakDuration?: IntWithAggregatesFilter<"PomodoroSettings"> | number
    longBreakInterval?: IntWithAggregatesFilter<"PomodoroSettings"> | number
    dailyGoal?: IntWithAggregatesFilter<"PomodoroSettings"> | number
    autoStartBreaks?: BoolWithAggregatesFilter<"PomodoroSettings"> | boolean
    autoStartPomodoros?: BoolWithAggregatesFilter<"PomodoroSettings"> | boolean
  }

  export type DailyFocusStatsWhereInput = {
    AND?: DailyFocusStatsWhereInput | DailyFocusStatsWhereInput[]
    OR?: DailyFocusStatsWhereInput[]
    NOT?: DailyFocusStatsWhereInput | DailyFocusStatsWhereInput[]
    id?: StringFilter<"DailyFocusStats"> | string
    userId?: StringFilter<"DailyFocusStats"> | string
    date?: DateTimeFilter<"DailyFocusStats"> | Date | string
    totalFocusMinutes?: IntFilter<"DailyFocusStats"> | number
    sessionsCompleted?: IntFilter<"DailyFocusStats"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DailyFocusStatsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    totalFocusMinutes?: SortOrder
    sessionsCompleted?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DailyFocusStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: DailyFocusStatsUserIdDateCompoundUniqueInput
    AND?: DailyFocusStatsWhereInput | DailyFocusStatsWhereInput[]
    OR?: DailyFocusStatsWhereInput[]
    NOT?: DailyFocusStatsWhereInput | DailyFocusStatsWhereInput[]
    userId?: StringFilter<"DailyFocusStats"> | string
    date?: DateTimeFilter<"DailyFocusStats"> | Date | string
    totalFocusMinutes?: IntFilter<"DailyFocusStats"> | number
    sessionsCompleted?: IntFilter<"DailyFocusStats"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type DailyFocusStatsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    totalFocusMinutes?: SortOrder
    sessionsCompleted?: SortOrder
    _count?: DailyFocusStatsCountOrderByAggregateInput
    _avg?: DailyFocusStatsAvgOrderByAggregateInput
    _max?: DailyFocusStatsMaxOrderByAggregateInput
    _min?: DailyFocusStatsMinOrderByAggregateInput
    _sum?: DailyFocusStatsSumOrderByAggregateInput
  }

  export type DailyFocusStatsScalarWhereWithAggregatesInput = {
    AND?: DailyFocusStatsScalarWhereWithAggregatesInput | DailyFocusStatsScalarWhereWithAggregatesInput[]
    OR?: DailyFocusStatsScalarWhereWithAggregatesInput[]
    NOT?: DailyFocusStatsScalarWhereWithAggregatesInput | DailyFocusStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyFocusStats"> | string
    userId?: StringWithAggregatesFilter<"DailyFocusStats"> | string
    date?: DateTimeWithAggregatesFilter<"DailyFocusStats"> | Date | string
    totalFocusMinutes?: IntWithAggregatesFilter<"DailyFocusStats"> | number
    sessionsCompleted?: IntWithAggregatesFilter<"DailyFocusStats"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionCreateNestedManyWithoutUserInput
    examResults?: ExamResultCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    parent?: UserCreateNestedOneWithoutStudentsInput
    students?: UserCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    parentId?: string | null
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionUncheckedCreateNestedManyWithoutUserInput
    examResults?: ExamResultUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    students?: UserUncheckedCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsUncheckedCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    parent?: UserUpdateOneWithoutStudentsNestedInput
    students?: UserUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUncheckedUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    students?: UserUncheckedUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUncheckedUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    parentId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PushTokenCreateInput = {
    id?: string
    token: string
    platform: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPushTokensInput
  }

  export type PushTokenUncheckedCreateInput = {
    id?: string
    token: string
    platform: string
    userId: string
    createdAt?: Date | string
  }

  export type PushTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPushTokensNestedInput
  }

  export type PushTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushTokenCreateManyInput = {
    id?: string
    token: string
    platform: string
    userId: string
    createdAt?: Date | string
  }

  export type PushTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionCreateInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatSessionsInput
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateInput = {
    id?: string
    userId: string
    title?: string | null
    createdAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatSessionsNestedInput
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionCreateManyInput = {
    id?: string
    userId: string
    title?: string | null
    createdAt?: Date | string
  }

  export type ChatSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    session: ChatSessionCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    sessionId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ChatSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    sessionId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionSolutionCreateInput = {
    id?: string
    imageUrl: string
    ocrText?: string | null
    solution?: string | null
    lesson?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSolutionsInput
  }

  export type QuestionSolutionUncheckedCreateInput = {
    id?: string
    userId: string
    imageUrl: string
    ocrText?: string | null
    solution?: string | null
    lesson?: string | null
    createdAt?: Date | string
  }

  export type QuestionSolutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    ocrText?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSolutionsNestedInput
  }

  export type QuestionSolutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    ocrText?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionSolutionCreateManyInput = {
    id?: string
    userId: string
    imageUrl: string
    ocrText?: string | null
    solution?: string | null
    lesson?: string | null
    createdAt?: Date | string
  }

  export type QuestionSolutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    ocrText?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionSolutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    ocrText?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamResultCreateInput = {
    id?: string
    examType: $Enums.ExamType
    name?: string | null
    date?: Date | string
    score?: number | null
    user: UserCreateNestedOneWithoutExamResultsInput
    details?: ExamDetailCreateNestedManyWithoutExamResultInput
  }

  export type ExamResultUncheckedCreateInput = {
    id?: string
    userId: string
    examType: $Enums.ExamType
    name?: string | null
    date?: Date | string
    score?: number | null
    details?: ExamDetailUncheckedCreateNestedManyWithoutExamResultInput
  }

  export type ExamResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examType?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutExamResultsNestedInput
    details?: ExamDetailUpdateManyWithoutExamResultNestedInput
  }

  export type ExamResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    examType?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    details?: ExamDetailUncheckedUpdateManyWithoutExamResultNestedInput
  }

  export type ExamResultCreateManyInput = {
    id?: string
    userId: string
    examType: $Enums.ExamType
    name?: string | null
    date?: Date | string
    score?: number | null
  }

  export type ExamResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    examType?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ExamResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    examType?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ExamDetailCreateInput = {
    id?: string
    lesson: string
    topic?: string | null
    correct: number
    incorrect: number
    empty: number
    net: number
    examResult: ExamResultCreateNestedOneWithoutDetailsInput
  }

  export type ExamDetailUncheckedCreateInput = {
    id?: string
    examResultId: string
    lesson: string
    topic?: string | null
    correct: number
    incorrect: number
    empty: number
    net: number
  }

  export type ExamDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesson?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    correct?: IntFieldUpdateOperationsInput | number
    incorrect?: IntFieldUpdateOperationsInput | number
    empty?: IntFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    examResult?: ExamResultUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type ExamDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examResultId?: StringFieldUpdateOperationsInput | string
    lesson?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    correct?: IntFieldUpdateOperationsInput | number
    incorrect?: IntFieldUpdateOperationsInput | number
    empty?: IntFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
  }

  export type ExamDetailCreateManyInput = {
    id?: string
    examResultId: string
    lesson: string
    topic?: string | null
    correct: number
    incorrect: number
    empty: number
    net: number
  }

  export type ExamDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesson?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    correct?: IntFieldUpdateOperationsInput | number
    incorrect?: IntFieldUpdateOperationsInput | number
    empty?: IntFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
  }

  export type ExamDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    examResultId?: StringFieldUpdateOperationsInput | string
    lesson?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    correct?: IntFieldUpdateOperationsInput | number
    incorrect?: IntFieldUpdateOperationsInput | number
    empty?: IntFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
  }

  export type StudyPlanCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    content: string
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStudyPlansInput
  }

  export type StudyPlanUncheckedCreateInput = {
    id?: string
    userId: string
    startDate: Date | string
    endDate: Date | string
    content: string
    status?: string
    createdAt?: Date | string
  }

  export type StudyPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudyPlansNestedInput
  }

  export type StudyPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyPlanCreateManyInput = {
    id?: string
    userId: string
    startDate: Date | string
    endDate: Date | string
    content: string
    status?: string
    createdAt?: Date | string
  }

  export type StudyPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PomodoroSessionCreateInput = {
    id?: string
    duration: number
    lesson?: string | null
    topic?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    completed?: boolean
    user: UserCreateNestedOneWithoutPomodoroSessionsInput
  }

  export type PomodoroSessionUncheckedCreateInput = {
    id?: string
    userId: string
    duration: number
    lesson?: string | null
    topic?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    completed?: boolean
  }

  export type PomodoroSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPomodoroSessionsNestedInput
  }

  export type PomodoroSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PomodoroSessionCreateManyInput = {
    id?: string
    userId: string
    duration: number
    lesson?: string | null
    topic?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    completed?: boolean
  }

  export type PomodoroSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PomodoroSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BadgeCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl?: string | null
    criteriaKey?: string | null
    userBadges?: UserBadgeCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl?: string | null
    criteriaKey?: string | null
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    criteriaKey?: NullableStringFieldUpdateOperationsInput | string | null
    userBadges?: UserBadgeUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    criteriaKey?: NullableStringFieldUpdateOperationsInput | string | null
    userBadges?: UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeCreateManyInput = {
    id?: string
    name: string
    description: string
    imageUrl?: string | null
    criteriaKey?: string | null
  }

  export type BadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    criteriaKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    criteriaKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserBadgeCreateInput = {
    id?: string
    earnedAt?: Date | string
    user: UserCreateNestedOneWithoutUserBadgesInput
    badge: BadgeCreateNestedOneWithoutUserBadgesInput
  }

  export type UserBadgeUncheckedCreateInput = {
    id?: string
    userId: string
    badgeId: string
    earnedAt?: Date | string
  }

  export type UserBadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBadgesNestedInput
    badge?: BadgeUpdateOneRequiredWithoutUserBadgesNestedInput
  }

  export type UserBadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateManyInput = {
    id?: string
    userId: string
    badgeId: string
    earnedAt?: Date | string
  }

  export type UserBadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingsCreateInput = {
    id?: string
    pomodoroNotifications?: string
    studyPlanReminders?: boolean
    examAnalysisAlerts?: boolean
    dailyReminders?: boolean
    user: UserCreateNestedOneWithoutNotificationSettingsInput
  }

  export type NotificationSettingsUncheckedCreateInput = {
    id?: string
    userId: string
    pomodoroNotifications?: string
    studyPlanReminders?: boolean
    examAnalysisAlerts?: boolean
    dailyReminders?: boolean
  }

  export type NotificationSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pomodoroNotifications?: StringFieldUpdateOperationsInput | string
    studyPlanReminders?: BoolFieldUpdateOperationsInput | boolean
    examAnalysisAlerts?: BoolFieldUpdateOperationsInput | boolean
    dailyReminders?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNotificationSettingsNestedInput
  }

  export type NotificationSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pomodoroNotifications?: StringFieldUpdateOperationsInput | string
    studyPlanReminders?: BoolFieldUpdateOperationsInput | boolean
    examAnalysisAlerts?: BoolFieldUpdateOperationsInput | boolean
    dailyReminders?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationSettingsCreateManyInput = {
    id?: string
    userId: string
    pomodoroNotifications?: string
    studyPlanReminders?: boolean
    examAnalysisAlerts?: boolean
    dailyReminders?: boolean
  }

  export type NotificationSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pomodoroNotifications?: StringFieldUpdateOperationsInput | string
    studyPlanReminders?: BoolFieldUpdateOperationsInput | boolean
    examAnalysisAlerts?: BoolFieldUpdateOperationsInput | boolean
    dailyReminders?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pomodoroNotifications?: StringFieldUpdateOperationsInput | string
    studyPlanReminders?: BoolFieldUpdateOperationsInput | boolean
    examAnalysisAlerts?: BoolFieldUpdateOperationsInput | boolean
    dailyReminders?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PomodoroSettingsCreateInput = {
    id?: string
    workDuration?: number
    shortBreakDuration?: number
    longBreakDuration?: number
    longBreakInterval?: number
    dailyGoal?: number
    autoStartBreaks?: boolean
    autoStartPomodoros?: boolean
    user: UserCreateNestedOneWithoutPomodoroSettingsInput
  }

  export type PomodoroSettingsUncheckedCreateInput = {
    id?: string
    userId: string
    workDuration?: number
    shortBreakDuration?: number
    longBreakDuration?: number
    longBreakInterval?: number
    dailyGoal?: number
    autoStartBreaks?: boolean
    autoStartPomodoros?: boolean
  }

  export type PomodoroSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workDuration?: IntFieldUpdateOperationsInput | number
    shortBreakDuration?: IntFieldUpdateOperationsInput | number
    longBreakDuration?: IntFieldUpdateOperationsInput | number
    longBreakInterval?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    autoStartBreaks?: BoolFieldUpdateOperationsInput | boolean
    autoStartPomodoros?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPomodoroSettingsNestedInput
  }

  export type PomodoroSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workDuration?: IntFieldUpdateOperationsInput | number
    shortBreakDuration?: IntFieldUpdateOperationsInput | number
    longBreakDuration?: IntFieldUpdateOperationsInput | number
    longBreakInterval?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    autoStartBreaks?: BoolFieldUpdateOperationsInput | boolean
    autoStartPomodoros?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PomodoroSettingsCreateManyInput = {
    id?: string
    userId: string
    workDuration?: number
    shortBreakDuration?: number
    longBreakDuration?: number
    longBreakInterval?: number
    dailyGoal?: number
    autoStartBreaks?: boolean
    autoStartPomodoros?: boolean
  }

  export type PomodoroSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workDuration?: IntFieldUpdateOperationsInput | number
    shortBreakDuration?: IntFieldUpdateOperationsInput | number
    longBreakDuration?: IntFieldUpdateOperationsInput | number
    longBreakInterval?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    autoStartBreaks?: BoolFieldUpdateOperationsInput | boolean
    autoStartPomodoros?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PomodoroSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workDuration?: IntFieldUpdateOperationsInput | number
    shortBreakDuration?: IntFieldUpdateOperationsInput | number
    longBreakDuration?: IntFieldUpdateOperationsInput | number
    longBreakInterval?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    autoStartBreaks?: BoolFieldUpdateOperationsInput | boolean
    autoStartPomodoros?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyFocusStatsCreateInput = {
    id?: string
    date?: Date | string
    totalFocusMinutes?: number
    sessionsCompleted?: number
    user: UserCreateNestedOneWithoutDailyFocusStatsInput
  }

  export type DailyFocusStatsUncheckedCreateInput = {
    id?: string
    userId: string
    date?: Date | string
    totalFocusMinutes?: number
    sessionsCompleted?: number
  }

  export type DailyFocusStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFocusMinutes?: IntFieldUpdateOperationsInput | number
    sessionsCompleted?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDailyFocusStatsNestedInput
  }

  export type DailyFocusStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFocusMinutes?: IntFieldUpdateOperationsInput | number
    sessionsCompleted?: IntFieldUpdateOperationsInput | number
  }

  export type DailyFocusStatsCreateManyInput = {
    id?: string
    userId: string
    date?: Date | string
    totalFocusMinutes?: number
    sessionsCompleted?: number
  }

  export type DailyFocusStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFocusMinutes?: IntFieldUpdateOperationsInput | number
    sessionsCompleted?: IntFieldUpdateOperationsInput | number
  }

  export type DailyFocusStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFocusMinutes?: IntFieldUpdateOperationsInput | number
    sessionsCompleted?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChatSessionListRelationFilter = {
    every?: ChatSessionWhereInput
    some?: ChatSessionWhereInput
    none?: ChatSessionWhereInput
  }

  export type QuestionSolutionListRelationFilter = {
    every?: QuestionSolutionWhereInput
    some?: QuestionSolutionWhereInput
    none?: QuestionSolutionWhereInput
  }

  export type ExamResultListRelationFilter = {
    every?: ExamResultWhereInput
    some?: ExamResultWhereInput
    none?: ExamResultWhereInput
  }

  export type StudyPlanListRelationFilter = {
    every?: StudyPlanWhereInput
    some?: StudyPlanWhereInput
    none?: StudyPlanWhereInput
  }

  export type PomodoroSessionListRelationFilter = {
    every?: PomodoroSessionWhereInput
    some?: PomodoroSessionWhereInput
    none?: PomodoroSessionWhereInput
  }

  export type UserBadgeListRelationFilter = {
    every?: UserBadgeWhereInput
    some?: UserBadgeWhereInput
    none?: UserBadgeWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PushTokenListRelationFilter = {
    every?: PushTokenWhereInput
    some?: PushTokenWhereInput
    none?: PushTokenWhereInput
  }

  export type NotificationSettingsNullableScalarRelationFilter = {
    is?: NotificationSettingsWhereInput | null
    isNot?: NotificationSettingsWhereInput | null
  }

  export type PomodoroSettingsNullableScalarRelationFilter = {
    is?: PomodoroSettingsWhereInput | null
    isNot?: PomodoroSettingsWhereInput | null
  }

  export type DailyFocusStatsListRelationFilter = {
    every?: DailyFocusStatsWhereInput
    some?: DailyFocusStatsWhereInput
    none?: DailyFocusStatsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionSolutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudyPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PomodoroSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserBadgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PushTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyFocusStatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleId?: SortOrder
    password?: SortOrder
    parentId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleId?: SortOrder
    password?: SortOrder
    parentId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleId?: SortOrder
    password?: SortOrder
    parentId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PushTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PushTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PushTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatSessionScalarRelationFilter = {
    is?: ChatSessionWhereInput
    isNot?: ChatSessionWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionSolutionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageUrl?: SortOrder
    ocrText?: SortOrder
    solution?: SortOrder
    lesson?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionSolutionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageUrl?: SortOrder
    ocrText?: SortOrder
    solution?: SortOrder
    lesson?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionSolutionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageUrl?: SortOrder
    ocrText?: SortOrder
    solution?: SortOrder
    lesson?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumExamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamType | EnumExamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExamTypeFilter<$PrismaModel> | $Enums.ExamType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ExamDetailListRelationFilter = {
    every?: ExamDetailWhereInput
    some?: ExamDetailWhereInput
    none?: ExamDetailWhereInput
  }

  export type ExamDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamResultCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    examType?: SortOrder
    name?: SortOrder
    date?: SortOrder
    score?: SortOrder
  }

  export type ExamResultAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type ExamResultMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    examType?: SortOrder
    name?: SortOrder
    date?: SortOrder
    score?: SortOrder
  }

  export type ExamResultMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    examType?: SortOrder
    name?: SortOrder
    date?: SortOrder
    score?: SortOrder
  }

  export type ExamResultSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumExamTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamType | EnumExamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExamTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExamType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExamTypeFilter<$PrismaModel>
    _max?: NestedEnumExamTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ExamResultScalarRelationFilter = {
    is?: ExamResultWhereInput
    isNot?: ExamResultWhereInput
  }

  export type ExamDetailCountOrderByAggregateInput = {
    id?: SortOrder
    examResultId?: SortOrder
    lesson?: SortOrder
    topic?: SortOrder
    correct?: SortOrder
    incorrect?: SortOrder
    empty?: SortOrder
    net?: SortOrder
  }

  export type ExamDetailAvgOrderByAggregateInput = {
    correct?: SortOrder
    incorrect?: SortOrder
    empty?: SortOrder
    net?: SortOrder
  }

  export type ExamDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    examResultId?: SortOrder
    lesson?: SortOrder
    topic?: SortOrder
    correct?: SortOrder
    incorrect?: SortOrder
    empty?: SortOrder
    net?: SortOrder
  }

  export type ExamDetailMinOrderByAggregateInput = {
    id?: SortOrder
    examResultId?: SortOrder
    lesson?: SortOrder
    topic?: SortOrder
    correct?: SortOrder
    incorrect?: SortOrder
    empty?: SortOrder
    net?: SortOrder
  }

  export type ExamDetailSumOrderByAggregateInput = {
    correct?: SortOrder
    incorrect?: SortOrder
    empty?: SortOrder
    net?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StudyPlanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    content?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StudyPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    content?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StudyPlanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    content?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PomodoroSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    lesson?: SortOrder
    topic?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    completed?: SortOrder
  }

  export type PomodoroSessionAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type PomodoroSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    lesson?: SortOrder
    topic?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    completed?: SortOrder
  }

  export type PomodoroSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    lesson?: SortOrder
    topic?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    completed?: SortOrder
  }

  export type PomodoroSessionSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BadgeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    criteriaKey?: SortOrder
  }

  export type BadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    criteriaKey?: SortOrder
  }

  export type BadgeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    criteriaKey?: SortOrder
  }

  export type BadgeScalarRelationFilter = {
    is?: BadgeWhereInput
    isNot?: BadgeWhereInput
  }

  export type UserBadgeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
  }

  export type UserBadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
  }

  export type UserBadgeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
  }

  export type NotificationSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pomodoroNotifications?: SortOrder
    studyPlanReminders?: SortOrder
    examAnalysisAlerts?: SortOrder
    dailyReminders?: SortOrder
  }

  export type NotificationSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pomodoroNotifications?: SortOrder
    studyPlanReminders?: SortOrder
    examAnalysisAlerts?: SortOrder
    dailyReminders?: SortOrder
  }

  export type NotificationSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pomodoroNotifications?: SortOrder
    studyPlanReminders?: SortOrder
    examAnalysisAlerts?: SortOrder
    dailyReminders?: SortOrder
  }

  export type PomodoroSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workDuration?: SortOrder
    shortBreakDuration?: SortOrder
    longBreakDuration?: SortOrder
    longBreakInterval?: SortOrder
    dailyGoal?: SortOrder
    autoStartBreaks?: SortOrder
    autoStartPomodoros?: SortOrder
  }

  export type PomodoroSettingsAvgOrderByAggregateInput = {
    workDuration?: SortOrder
    shortBreakDuration?: SortOrder
    longBreakDuration?: SortOrder
    longBreakInterval?: SortOrder
    dailyGoal?: SortOrder
  }

  export type PomodoroSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workDuration?: SortOrder
    shortBreakDuration?: SortOrder
    longBreakDuration?: SortOrder
    longBreakInterval?: SortOrder
    dailyGoal?: SortOrder
    autoStartBreaks?: SortOrder
    autoStartPomodoros?: SortOrder
  }

  export type PomodoroSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workDuration?: SortOrder
    shortBreakDuration?: SortOrder
    longBreakDuration?: SortOrder
    longBreakInterval?: SortOrder
    dailyGoal?: SortOrder
    autoStartBreaks?: SortOrder
    autoStartPomodoros?: SortOrder
  }

  export type PomodoroSettingsSumOrderByAggregateInput = {
    workDuration?: SortOrder
    shortBreakDuration?: SortOrder
    longBreakDuration?: SortOrder
    longBreakInterval?: SortOrder
    dailyGoal?: SortOrder
  }

  export type DailyFocusStatsUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type DailyFocusStatsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    totalFocusMinutes?: SortOrder
    sessionsCompleted?: SortOrder
  }

  export type DailyFocusStatsAvgOrderByAggregateInput = {
    totalFocusMinutes?: SortOrder
    sessionsCompleted?: SortOrder
  }

  export type DailyFocusStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    totalFocusMinutes?: SortOrder
    sessionsCompleted?: SortOrder
  }

  export type DailyFocusStatsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    totalFocusMinutes?: SortOrder
    sessionsCompleted?: SortOrder
  }

  export type DailyFocusStatsSumOrderByAggregateInput = {
    totalFocusMinutes?: SortOrder
    sessionsCompleted?: SortOrder
  }

  export type ChatSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type QuestionSolutionCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionSolutionCreateWithoutUserInput, QuestionSolutionUncheckedCreateWithoutUserInput> | QuestionSolutionCreateWithoutUserInput[] | QuestionSolutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionSolutionCreateOrConnectWithoutUserInput | QuestionSolutionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionSolutionCreateManyUserInputEnvelope
    connect?: QuestionSolutionWhereUniqueInput | QuestionSolutionWhereUniqueInput[]
  }

  export type ExamResultCreateNestedManyWithoutUserInput = {
    create?: XOR<ExamResultCreateWithoutUserInput, ExamResultUncheckedCreateWithoutUserInput> | ExamResultCreateWithoutUserInput[] | ExamResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamResultCreateOrConnectWithoutUserInput | ExamResultCreateOrConnectWithoutUserInput[]
    createMany?: ExamResultCreateManyUserInputEnvelope
    connect?: ExamResultWhereUniqueInput | ExamResultWhereUniqueInput[]
  }

  export type StudyPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput> | StudyPlanCreateWithoutUserInput[] | StudyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutUserInput | StudyPlanCreateOrConnectWithoutUserInput[]
    createMany?: StudyPlanCreateManyUserInputEnvelope
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
  }

  export type PomodoroSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<PomodoroSessionCreateWithoutUserInput, PomodoroSessionUncheckedCreateWithoutUserInput> | PomodoroSessionCreateWithoutUserInput[] | PomodoroSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PomodoroSessionCreateOrConnectWithoutUserInput | PomodoroSessionCreateOrConnectWithoutUserInput[]
    createMany?: PomodoroSessionCreateManyUserInputEnvelope
    connect?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
  }

  export type UserBadgeCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutStudentsInput = {
    create?: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutParentInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PushTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<PushTokenCreateWithoutUserInput, PushTokenUncheckedCreateWithoutUserInput> | PushTokenCreateWithoutUserInput[] | PushTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutUserInput | PushTokenCreateOrConnectWithoutUserInput[]
    createMany?: PushTokenCreateManyUserInputEnvelope
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
  }

  export type NotificationSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<NotificationSettingsCreateWithoutUserInput, NotificationSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationSettingsCreateOrConnectWithoutUserInput
    connect?: NotificationSettingsWhereUniqueInput
  }

  export type PomodoroSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<PomodoroSettingsCreateWithoutUserInput, PomodoroSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PomodoroSettingsCreateOrConnectWithoutUserInput
    connect?: PomodoroSettingsWhereUniqueInput
  }

  export type DailyFocusStatsCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyFocusStatsCreateWithoutUserInput, DailyFocusStatsUncheckedCreateWithoutUserInput> | DailyFocusStatsCreateWithoutUserInput[] | DailyFocusStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyFocusStatsCreateOrConnectWithoutUserInput | DailyFocusStatsCreateOrConnectWithoutUserInput[]
    createMany?: DailyFocusStatsCreateManyUserInputEnvelope
    connect?: DailyFocusStatsWhereUniqueInput | DailyFocusStatsWhereUniqueInput[]
  }

  export type ChatSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type QuestionSolutionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionSolutionCreateWithoutUserInput, QuestionSolutionUncheckedCreateWithoutUserInput> | QuestionSolutionCreateWithoutUserInput[] | QuestionSolutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionSolutionCreateOrConnectWithoutUserInput | QuestionSolutionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionSolutionCreateManyUserInputEnvelope
    connect?: QuestionSolutionWhereUniqueInput | QuestionSolutionWhereUniqueInput[]
  }

  export type ExamResultUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExamResultCreateWithoutUserInput, ExamResultUncheckedCreateWithoutUserInput> | ExamResultCreateWithoutUserInput[] | ExamResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamResultCreateOrConnectWithoutUserInput | ExamResultCreateOrConnectWithoutUserInput[]
    createMany?: ExamResultCreateManyUserInputEnvelope
    connect?: ExamResultWhereUniqueInput | ExamResultWhereUniqueInput[]
  }

  export type StudyPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput> | StudyPlanCreateWithoutUserInput[] | StudyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutUserInput | StudyPlanCreateOrConnectWithoutUserInput[]
    createMany?: StudyPlanCreateManyUserInputEnvelope
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
  }

  export type PomodoroSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PomodoroSessionCreateWithoutUserInput, PomodoroSessionUncheckedCreateWithoutUserInput> | PomodoroSessionCreateWithoutUserInput[] | PomodoroSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PomodoroSessionCreateOrConnectWithoutUserInput | PomodoroSessionCreateOrConnectWithoutUserInput[]
    createMany?: PomodoroSessionCreateManyUserInputEnvelope
    connect?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PushTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PushTokenCreateWithoutUserInput, PushTokenUncheckedCreateWithoutUserInput> | PushTokenCreateWithoutUserInput[] | PushTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutUserInput | PushTokenCreateOrConnectWithoutUserInput[]
    createMany?: PushTokenCreateManyUserInputEnvelope
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
  }

  export type NotificationSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<NotificationSettingsCreateWithoutUserInput, NotificationSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationSettingsCreateOrConnectWithoutUserInput
    connect?: NotificationSettingsWhereUniqueInput
  }

  export type PomodoroSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PomodoroSettingsCreateWithoutUserInput, PomodoroSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PomodoroSettingsCreateOrConnectWithoutUserInput
    connect?: PomodoroSettingsWhereUniqueInput
  }

  export type DailyFocusStatsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyFocusStatsCreateWithoutUserInput, DailyFocusStatsUncheckedCreateWithoutUserInput> | DailyFocusStatsCreateWithoutUserInput[] | DailyFocusStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyFocusStatsCreateOrConnectWithoutUserInput | DailyFocusStatsCreateOrConnectWithoutUserInput[]
    createMany?: DailyFocusStatsCreateManyUserInputEnvelope
    connect?: DailyFocusStatsWhereUniqueInput | DailyFocusStatsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChatSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutUserInput | ChatSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutUserInput | ChatSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutUserInput | ChatSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type QuestionSolutionUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionSolutionCreateWithoutUserInput, QuestionSolutionUncheckedCreateWithoutUserInput> | QuestionSolutionCreateWithoutUserInput[] | QuestionSolutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionSolutionCreateOrConnectWithoutUserInput | QuestionSolutionCreateOrConnectWithoutUserInput[]
    upsert?: QuestionSolutionUpsertWithWhereUniqueWithoutUserInput | QuestionSolutionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionSolutionCreateManyUserInputEnvelope
    set?: QuestionSolutionWhereUniqueInput | QuestionSolutionWhereUniqueInput[]
    disconnect?: QuestionSolutionWhereUniqueInput | QuestionSolutionWhereUniqueInput[]
    delete?: QuestionSolutionWhereUniqueInput | QuestionSolutionWhereUniqueInput[]
    connect?: QuestionSolutionWhereUniqueInput | QuestionSolutionWhereUniqueInput[]
    update?: QuestionSolutionUpdateWithWhereUniqueWithoutUserInput | QuestionSolutionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionSolutionUpdateManyWithWhereWithoutUserInput | QuestionSolutionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionSolutionScalarWhereInput | QuestionSolutionScalarWhereInput[]
  }

  export type ExamResultUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExamResultCreateWithoutUserInput, ExamResultUncheckedCreateWithoutUserInput> | ExamResultCreateWithoutUserInput[] | ExamResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamResultCreateOrConnectWithoutUserInput | ExamResultCreateOrConnectWithoutUserInput[]
    upsert?: ExamResultUpsertWithWhereUniqueWithoutUserInput | ExamResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExamResultCreateManyUserInputEnvelope
    set?: ExamResultWhereUniqueInput | ExamResultWhereUniqueInput[]
    disconnect?: ExamResultWhereUniqueInput | ExamResultWhereUniqueInput[]
    delete?: ExamResultWhereUniqueInput | ExamResultWhereUniqueInput[]
    connect?: ExamResultWhereUniqueInput | ExamResultWhereUniqueInput[]
    update?: ExamResultUpdateWithWhereUniqueWithoutUserInput | ExamResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExamResultUpdateManyWithWhereWithoutUserInput | ExamResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExamResultScalarWhereInput | ExamResultScalarWhereInput[]
  }

  export type StudyPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput> | StudyPlanCreateWithoutUserInput[] | StudyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutUserInput | StudyPlanCreateOrConnectWithoutUserInput[]
    upsert?: StudyPlanUpsertWithWhereUniqueWithoutUserInput | StudyPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudyPlanCreateManyUserInputEnvelope
    set?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    disconnect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    delete?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    update?: StudyPlanUpdateWithWhereUniqueWithoutUserInput | StudyPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudyPlanUpdateManyWithWhereWithoutUserInput | StudyPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
  }

  export type PomodoroSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PomodoroSessionCreateWithoutUserInput, PomodoroSessionUncheckedCreateWithoutUserInput> | PomodoroSessionCreateWithoutUserInput[] | PomodoroSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PomodoroSessionCreateOrConnectWithoutUserInput | PomodoroSessionCreateOrConnectWithoutUserInput[]
    upsert?: PomodoroSessionUpsertWithWhereUniqueWithoutUserInput | PomodoroSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PomodoroSessionCreateManyUserInputEnvelope
    set?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    disconnect?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    delete?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    connect?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    update?: PomodoroSessionUpdateWithWhereUniqueWithoutUserInput | PomodoroSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PomodoroSessionUpdateManyWithWhereWithoutUserInput | PomodoroSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PomodoroSessionScalarWhereInput | PomodoroSessionScalarWhereInput[]
  }

  export type UserBadgeUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutUserInput | UserBadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutUserInput | UserBadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutUserInput | UserBadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type UserUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentsInput
    upsert?: UserUpsertWithoutStudentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentsInput, UserUpdateWithoutStudentsInput>, UserUncheckedUpdateWithoutStudentsInput>
  }

  export type UserUpdateManyWithoutParentNestedInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutParentInput | UserUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutParentInput | UserUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutParentInput | UserUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PushTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<PushTokenCreateWithoutUserInput, PushTokenUncheckedCreateWithoutUserInput> | PushTokenCreateWithoutUserInput[] | PushTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutUserInput | PushTokenCreateOrConnectWithoutUserInput[]
    upsert?: PushTokenUpsertWithWhereUniqueWithoutUserInput | PushTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PushTokenCreateManyUserInputEnvelope
    set?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    disconnect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    delete?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    update?: PushTokenUpdateWithWhereUniqueWithoutUserInput | PushTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PushTokenUpdateManyWithWhereWithoutUserInput | PushTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PushTokenScalarWhereInput | PushTokenScalarWhereInput[]
  }

  export type NotificationSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<NotificationSettingsCreateWithoutUserInput, NotificationSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationSettingsCreateOrConnectWithoutUserInput
    upsert?: NotificationSettingsUpsertWithoutUserInput
    disconnect?: NotificationSettingsWhereInput | boolean
    delete?: NotificationSettingsWhereInput | boolean
    connect?: NotificationSettingsWhereUniqueInput
    update?: XOR<XOR<NotificationSettingsUpdateToOneWithWhereWithoutUserInput, NotificationSettingsUpdateWithoutUserInput>, NotificationSettingsUncheckedUpdateWithoutUserInput>
  }

  export type PomodoroSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<PomodoroSettingsCreateWithoutUserInput, PomodoroSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PomodoroSettingsCreateOrConnectWithoutUserInput
    upsert?: PomodoroSettingsUpsertWithoutUserInput
    disconnect?: PomodoroSettingsWhereInput | boolean
    delete?: PomodoroSettingsWhereInput | boolean
    connect?: PomodoroSettingsWhereUniqueInput
    update?: XOR<XOR<PomodoroSettingsUpdateToOneWithWhereWithoutUserInput, PomodoroSettingsUpdateWithoutUserInput>, PomodoroSettingsUncheckedUpdateWithoutUserInput>
  }

  export type DailyFocusStatsUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyFocusStatsCreateWithoutUserInput, DailyFocusStatsUncheckedCreateWithoutUserInput> | DailyFocusStatsCreateWithoutUserInput[] | DailyFocusStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyFocusStatsCreateOrConnectWithoutUserInput | DailyFocusStatsCreateOrConnectWithoutUserInput[]
    upsert?: DailyFocusStatsUpsertWithWhereUniqueWithoutUserInput | DailyFocusStatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyFocusStatsCreateManyUserInputEnvelope
    set?: DailyFocusStatsWhereUniqueInput | DailyFocusStatsWhereUniqueInput[]
    disconnect?: DailyFocusStatsWhereUniqueInput | DailyFocusStatsWhereUniqueInput[]
    delete?: DailyFocusStatsWhereUniqueInput | DailyFocusStatsWhereUniqueInput[]
    connect?: DailyFocusStatsWhereUniqueInput | DailyFocusStatsWhereUniqueInput[]
    update?: DailyFocusStatsUpdateWithWhereUniqueWithoutUserInput | DailyFocusStatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyFocusStatsUpdateManyWithWhereWithoutUserInput | DailyFocusStatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyFocusStatsScalarWhereInput | DailyFocusStatsScalarWhereInput[]
  }

  export type ChatSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutUserInput | ChatSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutUserInput | ChatSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutUserInput | ChatSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type QuestionSolutionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionSolutionCreateWithoutUserInput, QuestionSolutionUncheckedCreateWithoutUserInput> | QuestionSolutionCreateWithoutUserInput[] | QuestionSolutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionSolutionCreateOrConnectWithoutUserInput | QuestionSolutionCreateOrConnectWithoutUserInput[]
    upsert?: QuestionSolutionUpsertWithWhereUniqueWithoutUserInput | QuestionSolutionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionSolutionCreateManyUserInputEnvelope
    set?: QuestionSolutionWhereUniqueInput | QuestionSolutionWhereUniqueInput[]
    disconnect?: QuestionSolutionWhereUniqueInput | QuestionSolutionWhereUniqueInput[]
    delete?: QuestionSolutionWhereUniqueInput | QuestionSolutionWhereUniqueInput[]
    connect?: QuestionSolutionWhereUniqueInput | QuestionSolutionWhereUniqueInput[]
    update?: QuestionSolutionUpdateWithWhereUniqueWithoutUserInput | QuestionSolutionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionSolutionUpdateManyWithWhereWithoutUserInput | QuestionSolutionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionSolutionScalarWhereInput | QuestionSolutionScalarWhereInput[]
  }

  export type ExamResultUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExamResultCreateWithoutUserInput, ExamResultUncheckedCreateWithoutUserInput> | ExamResultCreateWithoutUserInput[] | ExamResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamResultCreateOrConnectWithoutUserInput | ExamResultCreateOrConnectWithoutUserInput[]
    upsert?: ExamResultUpsertWithWhereUniqueWithoutUserInput | ExamResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExamResultCreateManyUserInputEnvelope
    set?: ExamResultWhereUniqueInput | ExamResultWhereUniqueInput[]
    disconnect?: ExamResultWhereUniqueInput | ExamResultWhereUniqueInput[]
    delete?: ExamResultWhereUniqueInput | ExamResultWhereUniqueInput[]
    connect?: ExamResultWhereUniqueInput | ExamResultWhereUniqueInput[]
    update?: ExamResultUpdateWithWhereUniqueWithoutUserInput | ExamResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExamResultUpdateManyWithWhereWithoutUserInput | ExamResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExamResultScalarWhereInput | ExamResultScalarWhereInput[]
  }

  export type StudyPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput> | StudyPlanCreateWithoutUserInput[] | StudyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutUserInput | StudyPlanCreateOrConnectWithoutUserInput[]
    upsert?: StudyPlanUpsertWithWhereUniqueWithoutUserInput | StudyPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudyPlanCreateManyUserInputEnvelope
    set?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    disconnect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    delete?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    update?: StudyPlanUpdateWithWhereUniqueWithoutUserInput | StudyPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudyPlanUpdateManyWithWhereWithoutUserInput | StudyPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
  }

  export type PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PomodoroSessionCreateWithoutUserInput, PomodoroSessionUncheckedCreateWithoutUserInput> | PomodoroSessionCreateWithoutUserInput[] | PomodoroSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PomodoroSessionCreateOrConnectWithoutUserInput | PomodoroSessionCreateOrConnectWithoutUserInput[]
    upsert?: PomodoroSessionUpsertWithWhereUniqueWithoutUserInput | PomodoroSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PomodoroSessionCreateManyUserInputEnvelope
    set?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    disconnect?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    delete?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    connect?: PomodoroSessionWhereUniqueInput | PomodoroSessionWhereUniqueInput[]
    update?: PomodoroSessionUpdateWithWhereUniqueWithoutUserInput | PomodoroSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PomodoroSessionUpdateManyWithWhereWithoutUserInput | PomodoroSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PomodoroSessionScalarWhereInput | PomodoroSessionScalarWhereInput[]
  }

  export type UserBadgeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutUserInput | UserBadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutUserInput | UserBadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutUserInput | UserBadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutParentInput | UserUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutParentInput | UserUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutParentInput | UserUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PushTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PushTokenCreateWithoutUserInput, PushTokenUncheckedCreateWithoutUserInput> | PushTokenCreateWithoutUserInput[] | PushTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutUserInput | PushTokenCreateOrConnectWithoutUserInput[]
    upsert?: PushTokenUpsertWithWhereUniqueWithoutUserInput | PushTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PushTokenCreateManyUserInputEnvelope
    set?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    disconnect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    delete?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    update?: PushTokenUpdateWithWhereUniqueWithoutUserInput | PushTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PushTokenUpdateManyWithWhereWithoutUserInput | PushTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PushTokenScalarWhereInput | PushTokenScalarWhereInput[]
  }

  export type NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<NotificationSettingsCreateWithoutUserInput, NotificationSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationSettingsCreateOrConnectWithoutUserInput
    upsert?: NotificationSettingsUpsertWithoutUserInput
    disconnect?: NotificationSettingsWhereInput | boolean
    delete?: NotificationSettingsWhereInput | boolean
    connect?: NotificationSettingsWhereUniqueInput
    update?: XOR<XOR<NotificationSettingsUpdateToOneWithWhereWithoutUserInput, NotificationSettingsUpdateWithoutUserInput>, NotificationSettingsUncheckedUpdateWithoutUserInput>
  }

  export type PomodoroSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PomodoroSettingsCreateWithoutUserInput, PomodoroSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PomodoroSettingsCreateOrConnectWithoutUserInput
    upsert?: PomodoroSettingsUpsertWithoutUserInput
    disconnect?: PomodoroSettingsWhereInput | boolean
    delete?: PomodoroSettingsWhereInput | boolean
    connect?: PomodoroSettingsWhereUniqueInput
    update?: XOR<XOR<PomodoroSettingsUpdateToOneWithWhereWithoutUserInput, PomodoroSettingsUpdateWithoutUserInput>, PomodoroSettingsUncheckedUpdateWithoutUserInput>
  }

  export type DailyFocusStatsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyFocusStatsCreateWithoutUserInput, DailyFocusStatsUncheckedCreateWithoutUserInput> | DailyFocusStatsCreateWithoutUserInput[] | DailyFocusStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyFocusStatsCreateOrConnectWithoutUserInput | DailyFocusStatsCreateOrConnectWithoutUserInput[]
    upsert?: DailyFocusStatsUpsertWithWhereUniqueWithoutUserInput | DailyFocusStatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyFocusStatsCreateManyUserInputEnvelope
    set?: DailyFocusStatsWhereUniqueInput | DailyFocusStatsWhereUniqueInput[]
    disconnect?: DailyFocusStatsWhereUniqueInput | DailyFocusStatsWhereUniqueInput[]
    delete?: DailyFocusStatsWhereUniqueInput | DailyFocusStatsWhereUniqueInput[]
    connect?: DailyFocusStatsWhereUniqueInput | DailyFocusStatsWhereUniqueInput[]
    update?: DailyFocusStatsUpdateWithWhereUniqueWithoutUserInput | DailyFocusStatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyFocusStatsUpdateManyWithWhereWithoutUserInput | DailyFocusStatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyFocusStatsScalarWhereInput | DailyFocusStatsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPushTokensInput = {
    create?: XOR<UserCreateWithoutPushTokensInput, UserUncheckedCreateWithoutPushTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPushTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPushTokensNestedInput = {
    create?: XOR<UserCreateWithoutPushTokensInput, UserUncheckedCreateWithoutPushTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPushTokensInput
    upsert?: UserUpsertWithoutPushTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPushTokensInput, UserUpdateWithoutPushTokensInput>, UserUncheckedUpdateWithoutPushTokensInput>
  }

  export type UserCreateNestedOneWithoutChatSessionsInput = {
    create?: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutChatSessionsNestedInput = {
    create?: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatSessionsInput
    upsert?: UserUpsertWithoutChatSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatSessionsInput, UserUpdateWithoutChatSessionsInput>, UserUncheckedUpdateWithoutChatSessionsInput>
  }

  export type ChatMessageUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type ChatSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    upsert?: ChatSessionUpsertWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutMessagesInput, ChatSessionUpdateWithoutMessagesInput>, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutSolutionsInput = {
    create?: XOR<UserCreateWithoutSolutionsInput, UserUncheckedCreateWithoutSolutionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolutionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSolutionsNestedInput = {
    create?: XOR<UserCreateWithoutSolutionsInput, UserUncheckedCreateWithoutSolutionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolutionsInput
    upsert?: UserUpsertWithoutSolutionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSolutionsInput, UserUpdateWithoutSolutionsInput>, UserUncheckedUpdateWithoutSolutionsInput>
  }

  export type UserCreateNestedOneWithoutExamResultsInput = {
    create?: XOR<UserCreateWithoutExamResultsInput, UserUncheckedCreateWithoutExamResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamResultsInput
    connect?: UserWhereUniqueInput
  }

  export type ExamDetailCreateNestedManyWithoutExamResultInput = {
    create?: XOR<ExamDetailCreateWithoutExamResultInput, ExamDetailUncheckedCreateWithoutExamResultInput> | ExamDetailCreateWithoutExamResultInput[] | ExamDetailUncheckedCreateWithoutExamResultInput[]
    connectOrCreate?: ExamDetailCreateOrConnectWithoutExamResultInput | ExamDetailCreateOrConnectWithoutExamResultInput[]
    createMany?: ExamDetailCreateManyExamResultInputEnvelope
    connect?: ExamDetailWhereUniqueInput | ExamDetailWhereUniqueInput[]
  }

  export type ExamDetailUncheckedCreateNestedManyWithoutExamResultInput = {
    create?: XOR<ExamDetailCreateWithoutExamResultInput, ExamDetailUncheckedCreateWithoutExamResultInput> | ExamDetailCreateWithoutExamResultInput[] | ExamDetailUncheckedCreateWithoutExamResultInput[]
    connectOrCreate?: ExamDetailCreateOrConnectWithoutExamResultInput | ExamDetailCreateOrConnectWithoutExamResultInput[]
    createMany?: ExamDetailCreateManyExamResultInputEnvelope
    connect?: ExamDetailWhereUniqueInput | ExamDetailWhereUniqueInput[]
  }

  export type EnumExamTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExamType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutExamResultsNestedInput = {
    create?: XOR<UserCreateWithoutExamResultsInput, UserUncheckedCreateWithoutExamResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamResultsInput
    upsert?: UserUpsertWithoutExamResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExamResultsInput, UserUpdateWithoutExamResultsInput>, UserUncheckedUpdateWithoutExamResultsInput>
  }

  export type ExamDetailUpdateManyWithoutExamResultNestedInput = {
    create?: XOR<ExamDetailCreateWithoutExamResultInput, ExamDetailUncheckedCreateWithoutExamResultInput> | ExamDetailCreateWithoutExamResultInput[] | ExamDetailUncheckedCreateWithoutExamResultInput[]
    connectOrCreate?: ExamDetailCreateOrConnectWithoutExamResultInput | ExamDetailCreateOrConnectWithoutExamResultInput[]
    upsert?: ExamDetailUpsertWithWhereUniqueWithoutExamResultInput | ExamDetailUpsertWithWhereUniqueWithoutExamResultInput[]
    createMany?: ExamDetailCreateManyExamResultInputEnvelope
    set?: ExamDetailWhereUniqueInput | ExamDetailWhereUniqueInput[]
    disconnect?: ExamDetailWhereUniqueInput | ExamDetailWhereUniqueInput[]
    delete?: ExamDetailWhereUniqueInput | ExamDetailWhereUniqueInput[]
    connect?: ExamDetailWhereUniqueInput | ExamDetailWhereUniqueInput[]
    update?: ExamDetailUpdateWithWhereUniqueWithoutExamResultInput | ExamDetailUpdateWithWhereUniqueWithoutExamResultInput[]
    updateMany?: ExamDetailUpdateManyWithWhereWithoutExamResultInput | ExamDetailUpdateManyWithWhereWithoutExamResultInput[]
    deleteMany?: ExamDetailScalarWhereInput | ExamDetailScalarWhereInput[]
  }

  export type ExamDetailUncheckedUpdateManyWithoutExamResultNestedInput = {
    create?: XOR<ExamDetailCreateWithoutExamResultInput, ExamDetailUncheckedCreateWithoutExamResultInput> | ExamDetailCreateWithoutExamResultInput[] | ExamDetailUncheckedCreateWithoutExamResultInput[]
    connectOrCreate?: ExamDetailCreateOrConnectWithoutExamResultInput | ExamDetailCreateOrConnectWithoutExamResultInput[]
    upsert?: ExamDetailUpsertWithWhereUniqueWithoutExamResultInput | ExamDetailUpsertWithWhereUniqueWithoutExamResultInput[]
    createMany?: ExamDetailCreateManyExamResultInputEnvelope
    set?: ExamDetailWhereUniqueInput | ExamDetailWhereUniqueInput[]
    disconnect?: ExamDetailWhereUniqueInput | ExamDetailWhereUniqueInput[]
    delete?: ExamDetailWhereUniqueInput | ExamDetailWhereUniqueInput[]
    connect?: ExamDetailWhereUniqueInput | ExamDetailWhereUniqueInput[]
    update?: ExamDetailUpdateWithWhereUniqueWithoutExamResultInput | ExamDetailUpdateWithWhereUniqueWithoutExamResultInput[]
    updateMany?: ExamDetailUpdateManyWithWhereWithoutExamResultInput | ExamDetailUpdateManyWithWhereWithoutExamResultInput[]
    deleteMany?: ExamDetailScalarWhereInput | ExamDetailScalarWhereInput[]
  }

  export type ExamResultCreateNestedOneWithoutDetailsInput = {
    create?: XOR<ExamResultCreateWithoutDetailsInput, ExamResultUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: ExamResultCreateOrConnectWithoutDetailsInput
    connect?: ExamResultWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExamResultUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<ExamResultCreateWithoutDetailsInput, ExamResultUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: ExamResultCreateOrConnectWithoutDetailsInput
    upsert?: ExamResultUpsertWithoutDetailsInput
    connect?: ExamResultWhereUniqueInput
    update?: XOR<XOR<ExamResultUpdateToOneWithWhereWithoutDetailsInput, ExamResultUpdateWithoutDetailsInput>, ExamResultUncheckedUpdateWithoutDetailsInput>
  }

  export type UserCreateNestedOneWithoutStudyPlansInput = {
    create?: XOR<UserCreateWithoutStudyPlansInput, UserUncheckedCreateWithoutStudyPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudyPlansInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStudyPlansNestedInput = {
    create?: XOR<UserCreateWithoutStudyPlansInput, UserUncheckedCreateWithoutStudyPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudyPlansInput
    upsert?: UserUpsertWithoutStudyPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudyPlansInput, UserUpdateWithoutStudyPlansInput>, UserUncheckedUpdateWithoutStudyPlansInput>
  }

  export type UserCreateNestedOneWithoutPomodoroSessionsInput = {
    create?: XOR<UserCreateWithoutPomodoroSessionsInput, UserUncheckedCreateWithoutPomodoroSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPomodoroSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPomodoroSessionsNestedInput = {
    create?: XOR<UserCreateWithoutPomodoroSessionsInput, UserUncheckedCreateWithoutPomodoroSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPomodoroSessionsInput
    upsert?: UserUpsertWithoutPomodoroSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPomodoroSessionsInput, UserUpdateWithoutPomodoroSessionsInput>, UserUncheckedUpdateWithoutPomodoroSessionsInput>
  }

  export type UserBadgeCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type UserBadgeUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserBadgesInput = {
    create?: XOR<UserCreateWithoutUserBadgesInput, UserUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBadgesInput
    connect?: UserWhereUniqueInput
  }

  export type BadgeCreateNestedOneWithoutUserBadgesInput = {
    create?: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUserBadgesInput
    connect?: BadgeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserBadgesNestedInput = {
    create?: XOR<UserCreateWithoutUserBadgesInput, UserUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBadgesInput
    upsert?: UserUpsertWithoutUserBadgesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserBadgesInput, UserUpdateWithoutUserBadgesInput>, UserUncheckedUpdateWithoutUserBadgesInput>
  }

  export type BadgeUpdateOneRequiredWithoutUserBadgesNestedInput = {
    create?: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUserBadgesInput
    upsert?: BadgeUpsertWithoutUserBadgesInput
    connect?: BadgeWhereUniqueInput
    update?: XOR<XOR<BadgeUpdateToOneWithWhereWithoutUserBadgesInput, BadgeUpdateWithoutUserBadgesInput>, BadgeUncheckedUpdateWithoutUserBadgesInput>
  }

  export type UserCreateNestedOneWithoutNotificationSettingsInput = {
    create?: XOR<UserCreateWithoutNotificationSettingsInput, UserUncheckedCreateWithoutNotificationSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationSettingsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationSettingsInput, UserUncheckedCreateWithoutNotificationSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationSettingsInput
    upsert?: UserUpsertWithoutNotificationSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationSettingsInput, UserUpdateWithoutNotificationSettingsInput>, UserUncheckedUpdateWithoutNotificationSettingsInput>
  }

  export type UserCreateNestedOneWithoutPomodoroSettingsInput = {
    create?: XOR<UserCreateWithoutPomodoroSettingsInput, UserUncheckedCreateWithoutPomodoroSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPomodoroSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPomodoroSettingsNestedInput = {
    create?: XOR<UserCreateWithoutPomodoroSettingsInput, UserUncheckedCreateWithoutPomodoroSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPomodoroSettingsInput
    upsert?: UserUpsertWithoutPomodoroSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPomodoroSettingsInput, UserUpdateWithoutPomodoroSettingsInput>, UserUncheckedUpdateWithoutPomodoroSettingsInput>
  }

  export type UserCreateNestedOneWithoutDailyFocusStatsInput = {
    create?: XOR<UserCreateWithoutDailyFocusStatsInput, UserUncheckedCreateWithoutDailyFocusStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyFocusStatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDailyFocusStatsNestedInput = {
    create?: XOR<UserCreateWithoutDailyFocusStatsInput, UserUncheckedCreateWithoutDailyFocusStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyFocusStatsInput
    upsert?: UserUpsertWithoutDailyFocusStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyFocusStatsInput, UserUpdateWithoutDailyFocusStatsInput>, UserUncheckedUpdateWithoutDailyFocusStatsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumExamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamType | EnumExamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExamTypeFilter<$PrismaModel> | $Enums.ExamType
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumExamTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamType | EnumExamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExamTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExamType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExamTypeFilter<$PrismaModel>
    _max?: NestedEnumExamTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChatSessionCreateWithoutUserInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionCreateOrConnectWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput>
  }

  export type ChatSessionCreateManyUserInputEnvelope = {
    data: ChatSessionCreateManyUserInput | ChatSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuestionSolutionCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    ocrText?: string | null
    solution?: string | null
    lesson?: string | null
    createdAt?: Date | string
  }

  export type QuestionSolutionUncheckedCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    ocrText?: string | null
    solution?: string | null
    lesson?: string | null
    createdAt?: Date | string
  }

  export type QuestionSolutionCreateOrConnectWithoutUserInput = {
    where: QuestionSolutionWhereUniqueInput
    create: XOR<QuestionSolutionCreateWithoutUserInput, QuestionSolutionUncheckedCreateWithoutUserInput>
  }

  export type QuestionSolutionCreateManyUserInputEnvelope = {
    data: QuestionSolutionCreateManyUserInput | QuestionSolutionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExamResultCreateWithoutUserInput = {
    id?: string
    examType: $Enums.ExamType
    name?: string | null
    date?: Date | string
    score?: number | null
    details?: ExamDetailCreateNestedManyWithoutExamResultInput
  }

  export type ExamResultUncheckedCreateWithoutUserInput = {
    id?: string
    examType: $Enums.ExamType
    name?: string | null
    date?: Date | string
    score?: number | null
    details?: ExamDetailUncheckedCreateNestedManyWithoutExamResultInput
  }

  export type ExamResultCreateOrConnectWithoutUserInput = {
    where: ExamResultWhereUniqueInput
    create: XOR<ExamResultCreateWithoutUserInput, ExamResultUncheckedCreateWithoutUserInput>
  }

  export type ExamResultCreateManyUserInputEnvelope = {
    data: ExamResultCreateManyUserInput | ExamResultCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudyPlanCreateWithoutUserInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    content: string
    status?: string
    createdAt?: Date | string
  }

  export type StudyPlanUncheckedCreateWithoutUserInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    content: string
    status?: string
    createdAt?: Date | string
  }

  export type StudyPlanCreateOrConnectWithoutUserInput = {
    where: StudyPlanWhereUniqueInput
    create: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput>
  }

  export type StudyPlanCreateManyUserInputEnvelope = {
    data: StudyPlanCreateManyUserInput | StudyPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PomodoroSessionCreateWithoutUserInput = {
    id?: string
    duration: number
    lesson?: string | null
    topic?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    completed?: boolean
  }

  export type PomodoroSessionUncheckedCreateWithoutUserInput = {
    id?: string
    duration: number
    lesson?: string | null
    topic?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    completed?: boolean
  }

  export type PomodoroSessionCreateOrConnectWithoutUserInput = {
    where: PomodoroSessionWhereUniqueInput
    create: XOR<PomodoroSessionCreateWithoutUserInput, PomodoroSessionUncheckedCreateWithoutUserInput>
  }

  export type PomodoroSessionCreateManyUserInputEnvelope = {
    data: PomodoroSessionCreateManyUserInput | PomodoroSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserBadgeCreateWithoutUserInput = {
    id?: string
    earnedAt?: Date | string
    badge: BadgeCreateNestedOneWithoutUserBadgesInput
  }

  export type UserBadgeUncheckedCreateWithoutUserInput = {
    id?: string
    badgeId: string
    earnedAt?: Date | string
  }

  export type UserBadgeCreateOrConnectWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput>
  }

  export type UserBadgeCreateManyUserInputEnvelope = {
    data: UserBadgeCreateManyUserInput | UserBadgeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutStudentsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionCreateNestedManyWithoutUserInput
    examResults?: ExamResultCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    parent?: UserCreateNestedOneWithoutStudentsInput
    pushTokens?: PushTokenCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    parentId?: string | null
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionUncheckedCreateNestedManyWithoutUserInput
    examResults?: ExamResultUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    pushTokens?: PushTokenUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsUncheckedCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
  }

  export type UserCreateWithoutParentInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionCreateNestedManyWithoutUserInput
    examResults?: ExamResultCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    students?: UserCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParentInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionUncheckedCreateNestedManyWithoutUserInput
    examResults?: ExamResultUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    students?: UserUncheckedCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsUncheckedCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
  }

  export type UserCreateManyParentInputEnvelope = {
    data: UserCreateManyParentInput | UserCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type PushTokenCreateWithoutUserInput = {
    id?: string
    token: string
    platform: string
    createdAt?: Date | string
  }

  export type PushTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    platform: string
    createdAt?: Date | string
  }

  export type PushTokenCreateOrConnectWithoutUserInput = {
    where: PushTokenWhereUniqueInput
    create: XOR<PushTokenCreateWithoutUserInput, PushTokenUncheckedCreateWithoutUserInput>
  }

  export type PushTokenCreateManyUserInputEnvelope = {
    data: PushTokenCreateManyUserInput | PushTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationSettingsCreateWithoutUserInput = {
    id?: string
    pomodoroNotifications?: string
    studyPlanReminders?: boolean
    examAnalysisAlerts?: boolean
    dailyReminders?: boolean
  }

  export type NotificationSettingsUncheckedCreateWithoutUserInput = {
    id?: string
    pomodoroNotifications?: string
    studyPlanReminders?: boolean
    examAnalysisAlerts?: boolean
    dailyReminders?: boolean
  }

  export type NotificationSettingsCreateOrConnectWithoutUserInput = {
    where: NotificationSettingsWhereUniqueInput
    create: XOR<NotificationSettingsCreateWithoutUserInput, NotificationSettingsUncheckedCreateWithoutUserInput>
  }

  export type PomodoroSettingsCreateWithoutUserInput = {
    id?: string
    workDuration?: number
    shortBreakDuration?: number
    longBreakDuration?: number
    longBreakInterval?: number
    dailyGoal?: number
    autoStartBreaks?: boolean
    autoStartPomodoros?: boolean
  }

  export type PomodoroSettingsUncheckedCreateWithoutUserInput = {
    id?: string
    workDuration?: number
    shortBreakDuration?: number
    longBreakDuration?: number
    longBreakInterval?: number
    dailyGoal?: number
    autoStartBreaks?: boolean
    autoStartPomodoros?: boolean
  }

  export type PomodoroSettingsCreateOrConnectWithoutUserInput = {
    where: PomodoroSettingsWhereUniqueInput
    create: XOR<PomodoroSettingsCreateWithoutUserInput, PomodoroSettingsUncheckedCreateWithoutUserInput>
  }

  export type DailyFocusStatsCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    totalFocusMinutes?: number
    sessionsCompleted?: number
  }

  export type DailyFocusStatsUncheckedCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    totalFocusMinutes?: number
    sessionsCompleted?: number
  }

  export type DailyFocusStatsCreateOrConnectWithoutUserInput = {
    where: DailyFocusStatsWhereUniqueInput
    create: XOR<DailyFocusStatsCreateWithoutUserInput, DailyFocusStatsUncheckedCreateWithoutUserInput>
  }

  export type DailyFocusStatsCreateManyUserInputEnvelope = {
    data: DailyFocusStatsCreateManyUserInput | DailyFocusStatsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    update: XOR<ChatSessionUpdateWithoutUserInput, ChatSessionUncheckedUpdateWithoutUserInput>
    create: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput>
  }

  export type ChatSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    data: XOR<ChatSessionUpdateWithoutUserInput, ChatSessionUncheckedUpdateWithoutUserInput>
  }

  export type ChatSessionUpdateManyWithWhereWithoutUserInput = {
    where: ChatSessionScalarWhereInput
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatSessionScalarWhereInput = {
    AND?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    OR?: ChatSessionScalarWhereInput[]
    NOT?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    userId?: StringFilter<"ChatSession"> | string
    title?: StringNullableFilter<"ChatSession"> | string | null
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
  }

  export type QuestionSolutionUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestionSolutionWhereUniqueInput
    update: XOR<QuestionSolutionUpdateWithoutUserInput, QuestionSolutionUncheckedUpdateWithoutUserInput>
    create: XOR<QuestionSolutionCreateWithoutUserInput, QuestionSolutionUncheckedCreateWithoutUserInput>
  }

  export type QuestionSolutionUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestionSolutionWhereUniqueInput
    data: XOR<QuestionSolutionUpdateWithoutUserInput, QuestionSolutionUncheckedUpdateWithoutUserInput>
  }

  export type QuestionSolutionUpdateManyWithWhereWithoutUserInput = {
    where: QuestionSolutionScalarWhereInput
    data: XOR<QuestionSolutionUpdateManyMutationInput, QuestionSolutionUncheckedUpdateManyWithoutUserInput>
  }

  export type QuestionSolutionScalarWhereInput = {
    AND?: QuestionSolutionScalarWhereInput | QuestionSolutionScalarWhereInput[]
    OR?: QuestionSolutionScalarWhereInput[]
    NOT?: QuestionSolutionScalarWhereInput | QuestionSolutionScalarWhereInput[]
    id?: StringFilter<"QuestionSolution"> | string
    userId?: StringFilter<"QuestionSolution"> | string
    imageUrl?: StringFilter<"QuestionSolution"> | string
    ocrText?: StringNullableFilter<"QuestionSolution"> | string | null
    solution?: StringNullableFilter<"QuestionSolution"> | string | null
    lesson?: StringNullableFilter<"QuestionSolution"> | string | null
    createdAt?: DateTimeFilter<"QuestionSolution"> | Date | string
  }

  export type ExamResultUpsertWithWhereUniqueWithoutUserInput = {
    where: ExamResultWhereUniqueInput
    update: XOR<ExamResultUpdateWithoutUserInput, ExamResultUncheckedUpdateWithoutUserInput>
    create: XOR<ExamResultCreateWithoutUserInput, ExamResultUncheckedCreateWithoutUserInput>
  }

  export type ExamResultUpdateWithWhereUniqueWithoutUserInput = {
    where: ExamResultWhereUniqueInput
    data: XOR<ExamResultUpdateWithoutUserInput, ExamResultUncheckedUpdateWithoutUserInput>
  }

  export type ExamResultUpdateManyWithWhereWithoutUserInput = {
    where: ExamResultScalarWhereInput
    data: XOR<ExamResultUpdateManyMutationInput, ExamResultUncheckedUpdateManyWithoutUserInput>
  }

  export type ExamResultScalarWhereInput = {
    AND?: ExamResultScalarWhereInput | ExamResultScalarWhereInput[]
    OR?: ExamResultScalarWhereInput[]
    NOT?: ExamResultScalarWhereInput | ExamResultScalarWhereInput[]
    id?: StringFilter<"ExamResult"> | string
    userId?: StringFilter<"ExamResult"> | string
    examType?: EnumExamTypeFilter<"ExamResult"> | $Enums.ExamType
    name?: StringNullableFilter<"ExamResult"> | string | null
    date?: DateTimeFilter<"ExamResult"> | Date | string
    score?: FloatNullableFilter<"ExamResult"> | number | null
  }

  export type StudyPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: StudyPlanWhereUniqueInput
    update: XOR<StudyPlanUpdateWithoutUserInput, StudyPlanUncheckedUpdateWithoutUserInput>
    create: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput>
  }

  export type StudyPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: StudyPlanWhereUniqueInput
    data: XOR<StudyPlanUpdateWithoutUserInput, StudyPlanUncheckedUpdateWithoutUserInput>
  }

  export type StudyPlanUpdateManyWithWhereWithoutUserInput = {
    where: StudyPlanScalarWhereInput
    data: XOR<StudyPlanUpdateManyMutationInput, StudyPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type StudyPlanScalarWhereInput = {
    AND?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
    OR?: StudyPlanScalarWhereInput[]
    NOT?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
    id?: StringFilter<"StudyPlan"> | string
    userId?: StringFilter<"StudyPlan"> | string
    startDate?: DateTimeFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeFilter<"StudyPlan"> | Date | string
    content?: StringFilter<"StudyPlan"> | string
    status?: StringFilter<"StudyPlan"> | string
    createdAt?: DateTimeFilter<"StudyPlan"> | Date | string
  }

  export type PomodoroSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: PomodoroSessionWhereUniqueInput
    update: XOR<PomodoroSessionUpdateWithoutUserInput, PomodoroSessionUncheckedUpdateWithoutUserInput>
    create: XOR<PomodoroSessionCreateWithoutUserInput, PomodoroSessionUncheckedCreateWithoutUserInput>
  }

  export type PomodoroSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: PomodoroSessionWhereUniqueInput
    data: XOR<PomodoroSessionUpdateWithoutUserInput, PomodoroSessionUncheckedUpdateWithoutUserInput>
  }

  export type PomodoroSessionUpdateManyWithWhereWithoutUserInput = {
    where: PomodoroSessionScalarWhereInput
    data: XOR<PomodoroSessionUpdateManyMutationInput, PomodoroSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type PomodoroSessionScalarWhereInput = {
    AND?: PomodoroSessionScalarWhereInput | PomodoroSessionScalarWhereInput[]
    OR?: PomodoroSessionScalarWhereInput[]
    NOT?: PomodoroSessionScalarWhereInput | PomodoroSessionScalarWhereInput[]
    id?: StringFilter<"PomodoroSession"> | string
    userId?: StringFilter<"PomodoroSession"> | string
    duration?: IntFilter<"PomodoroSession"> | number
    lesson?: StringNullableFilter<"PomodoroSession"> | string | null
    topic?: StringNullableFilter<"PomodoroSession"> | string | null
    startedAt?: DateTimeFilter<"PomodoroSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"PomodoroSession"> | Date | string | null
    completed?: BoolFilter<"PomodoroSession"> | boolean
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutUserInput, UserBadgeUncheckedUpdateWithoutUserInput>
    create: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutUserInput, UserBadgeUncheckedUpdateWithoutUserInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutUserInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBadgeScalarWhereInput = {
    AND?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    OR?: UserBadgeScalarWhereInput[]
    NOT?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    id?: StringFilter<"UserBadge"> | string
    userId?: StringFilter<"UserBadge"> | string
    badgeId?: StringFilter<"UserBadge"> | string
    earnedAt?: DateTimeFilter<"UserBadge"> | Date | string
  }

  export type UserUpsertWithoutStudentsInput = {
    update: XOR<UserUpdateWithoutStudentsInput, UserUncheckedUpdateWithoutStudentsInput>
    create: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentsInput, UserUncheckedUpdateWithoutStudentsInput>
  }

  export type UserUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    parent?: UserUpdateOneWithoutStudentsNestedInput
    pushTokens?: PushTokenUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUncheckedUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    pushTokens?: PushTokenUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUncheckedUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutParentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutParentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
  }

  export type UserUpdateManyWithWhereWithoutParentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutParentInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    plan?: EnumPlanTypeFilter<"User"> | $Enums.PlanType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    googleId?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    parentId?: StringNullableFilter<"User"> | string | null
  }

  export type PushTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: PushTokenWhereUniqueInput
    update: XOR<PushTokenUpdateWithoutUserInput, PushTokenUncheckedUpdateWithoutUserInput>
    create: XOR<PushTokenCreateWithoutUserInput, PushTokenUncheckedCreateWithoutUserInput>
  }

  export type PushTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: PushTokenWhereUniqueInput
    data: XOR<PushTokenUpdateWithoutUserInput, PushTokenUncheckedUpdateWithoutUserInput>
  }

  export type PushTokenUpdateManyWithWhereWithoutUserInput = {
    where: PushTokenScalarWhereInput
    data: XOR<PushTokenUpdateManyMutationInput, PushTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type PushTokenScalarWhereInput = {
    AND?: PushTokenScalarWhereInput | PushTokenScalarWhereInput[]
    OR?: PushTokenScalarWhereInput[]
    NOT?: PushTokenScalarWhereInput | PushTokenScalarWhereInput[]
    id?: StringFilter<"PushToken"> | string
    token?: StringFilter<"PushToken"> | string
    platform?: StringFilter<"PushToken"> | string
    userId?: StringFilter<"PushToken"> | string
    createdAt?: DateTimeFilter<"PushToken"> | Date | string
  }

  export type NotificationSettingsUpsertWithoutUserInput = {
    update: XOR<NotificationSettingsUpdateWithoutUserInput, NotificationSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationSettingsCreateWithoutUserInput, NotificationSettingsUncheckedCreateWithoutUserInput>
    where?: NotificationSettingsWhereInput
  }

  export type NotificationSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: NotificationSettingsWhereInput
    data: XOR<NotificationSettingsUpdateWithoutUserInput, NotificationSettingsUncheckedUpdateWithoutUserInput>
  }

  export type NotificationSettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pomodoroNotifications?: StringFieldUpdateOperationsInput | string
    studyPlanReminders?: BoolFieldUpdateOperationsInput | boolean
    examAnalysisAlerts?: BoolFieldUpdateOperationsInput | boolean
    dailyReminders?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationSettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pomodoroNotifications?: StringFieldUpdateOperationsInput | string
    studyPlanReminders?: BoolFieldUpdateOperationsInput | boolean
    examAnalysisAlerts?: BoolFieldUpdateOperationsInput | boolean
    dailyReminders?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PomodoroSettingsUpsertWithoutUserInput = {
    update: XOR<PomodoroSettingsUpdateWithoutUserInput, PomodoroSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<PomodoroSettingsCreateWithoutUserInput, PomodoroSettingsUncheckedCreateWithoutUserInput>
    where?: PomodoroSettingsWhereInput
  }

  export type PomodoroSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: PomodoroSettingsWhereInput
    data: XOR<PomodoroSettingsUpdateWithoutUserInput, PomodoroSettingsUncheckedUpdateWithoutUserInput>
  }

  export type PomodoroSettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workDuration?: IntFieldUpdateOperationsInput | number
    shortBreakDuration?: IntFieldUpdateOperationsInput | number
    longBreakDuration?: IntFieldUpdateOperationsInput | number
    longBreakInterval?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    autoStartBreaks?: BoolFieldUpdateOperationsInput | boolean
    autoStartPomodoros?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PomodoroSettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workDuration?: IntFieldUpdateOperationsInput | number
    shortBreakDuration?: IntFieldUpdateOperationsInput | number
    longBreakDuration?: IntFieldUpdateOperationsInput | number
    longBreakInterval?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    autoStartBreaks?: BoolFieldUpdateOperationsInput | boolean
    autoStartPomodoros?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyFocusStatsUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyFocusStatsWhereUniqueInput
    update: XOR<DailyFocusStatsUpdateWithoutUserInput, DailyFocusStatsUncheckedUpdateWithoutUserInput>
    create: XOR<DailyFocusStatsCreateWithoutUserInput, DailyFocusStatsUncheckedCreateWithoutUserInput>
  }

  export type DailyFocusStatsUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyFocusStatsWhereUniqueInput
    data: XOR<DailyFocusStatsUpdateWithoutUserInput, DailyFocusStatsUncheckedUpdateWithoutUserInput>
  }

  export type DailyFocusStatsUpdateManyWithWhereWithoutUserInput = {
    where: DailyFocusStatsScalarWhereInput
    data: XOR<DailyFocusStatsUpdateManyMutationInput, DailyFocusStatsUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyFocusStatsScalarWhereInput = {
    AND?: DailyFocusStatsScalarWhereInput | DailyFocusStatsScalarWhereInput[]
    OR?: DailyFocusStatsScalarWhereInput[]
    NOT?: DailyFocusStatsScalarWhereInput | DailyFocusStatsScalarWhereInput[]
    id?: StringFilter<"DailyFocusStats"> | string
    userId?: StringFilter<"DailyFocusStats"> | string
    date?: DateTimeFilter<"DailyFocusStats"> | Date | string
    totalFocusMinutes?: IntFilter<"DailyFocusStats"> | number
    sessionsCompleted?: IntFilter<"DailyFocusStats"> | number
  }

  export type UserCreateWithoutPushTokensInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionCreateNestedManyWithoutUserInput
    examResults?: ExamResultCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    parent?: UserCreateNestedOneWithoutStudentsInput
    students?: UserCreateNestedManyWithoutParentInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPushTokensInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    parentId?: string | null
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionUncheckedCreateNestedManyWithoutUserInput
    examResults?: ExamResultUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    students?: UserUncheckedCreateNestedManyWithoutParentInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsUncheckedCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPushTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPushTokensInput, UserUncheckedCreateWithoutPushTokensInput>
  }

  export type UserUpsertWithoutPushTokensInput = {
    update: XOR<UserUpdateWithoutPushTokensInput, UserUncheckedUpdateWithoutPushTokensInput>
    create: XOR<UserCreateWithoutPushTokensInput, UserUncheckedCreateWithoutPushTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPushTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPushTokensInput, UserUncheckedUpdateWithoutPushTokensInput>
  }

  export type UserUpdateWithoutPushTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    parent?: UserUpdateOneWithoutStudentsNestedInput
    students?: UserUpdateManyWithoutParentNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPushTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUncheckedUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    students?: UserUncheckedUpdateManyWithoutParentNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUncheckedUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutChatSessionsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    solutions?: QuestionSolutionCreateNestedManyWithoutUserInput
    examResults?: ExamResultCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    parent?: UserCreateNestedOneWithoutStudentsInput
    students?: UserCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatSessionsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    parentId?: string | null
    solutions?: QuestionSolutionUncheckedCreateNestedManyWithoutUserInput
    examResults?: ExamResultUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    students?: UserUncheckedCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsUncheckedCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
  }

  export type ChatMessageCreateWithoutSessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUncheckedCreateWithoutSessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageCreateManySessionInputEnvelope = {
    data: ChatMessageCreateManySessionInput | ChatMessageCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChatSessionsInput = {
    update: XOR<UserUpdateWithoutChatSessionsInput, UserUncheckedUpdateWithoutChatSessionsInput>
    create: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatSessionsInput, UserUncheckedUpdateWithoutChatSessionsInput>
  }

  export type UserUpdateWithoutChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    solutions?: QuestionSolutionUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    parent?: UserUpdateOneWithoutStudentsNestedInput
    students?: UserUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    solutions?: QuestionSolutionUncheckedUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    students?: UserUncheckedUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUncheckedUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSessionInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSessionInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    sessionId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatSessionCreateWithoutMessagesInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatSessionsInput
  }

  export type ChatSessionUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    title?: string | null
    createdAt?: Date | string
  }

  export type ChatSessionCreateOrConnectWithoutMessagesInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
  }

  export type ChatSessionUpsertWithoutMessagesInput = {
    update: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatSessionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatSessionsNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSolutionsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    examResults?: ExamResultCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    parent?: UserCreateNestedOneWithoutStudentsInput
    students?: UserCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSolutionsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    parentId?: string | null
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    examResults?: ExamResultUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    students?: UserUncheckedCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsUncheckedCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSolutionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSolutionsInput, UserUncheckedCreateWithoutSolutionsInput>
  }

  export type UserUpsertWithoutSolutionsInput = {
    update: XOR<UserUpdateWithoutSolutionsInput, UserUncheckedUpdateWithoutSolutionsInput>
    create: XOR<UserCreateWithoutSolutionsInput, UserUncheckedCreateWithoutSolutionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSolutionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSolutionsInput, UserUncheckedUpdateWithoutSolutionsInput>
  }

  export type UserUpdateWithoutSolutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    parent?: UserUpdateOneWithoutStudentsNestedInput
    students?: UserUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSolutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    students?: UserUncheckedUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUncheckedUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutExamResultsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    parent?: UserCreateNestedOneWithoutStudentsInput
    students?: UserCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExamResultsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    parentId?: string | null
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    students?: UserUncheckedCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsUncheckedCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExamResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExamResultsInput, UserUncheckedCreateWithoutExamResultsInput>
  }

  export type ExamDetailCreateWithoutExamResultInput = {
    id?: string
    lesson: string
    topic?: string | null
    correct: number
    incorrect: number
    empty: number
    net: number
  }

  export type ExamDetailUncheckedCreateWithoutExamResultInput = {
    id?: string
    lesson: string
    topic?: string | null
    correct: number
    incorrect: number
    empty: number
    net: number
  }

  export type ExamDetailCreateOrConnectWithoutExamResultInput = {
    where: ExamDetailWhereUniqueInput
    create: XOR<ExamDetailCreateWithoutExamResultInput, ExamDetailUncheckedCreateWithoutExamResultInput>
  }

  export type ExamDetailCreateManyExamResultInputEnvelope = {
    data: ExamDetailCreateManyExamResultInput | ExamDetailCreateManyExamResultInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutExamResultsInput = {
    update: XOR<UserUpdateWithoutExamResultsInput, UserUncheckedUpdateWithoutExamResultsInput>
    create: XOR<UserCreateWithoutExamResultsInput, UserUncheckedCreateWithoutExamResultsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExamResultsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExamResultsInput, UserUncheckedUpdateWithoutExamResultsInput>
  }

  export type UserUpdateWithoutExamResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    parent?: UserUpdateOneWithoutStudentsNestedInput
    students?: UserUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExamResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    students?: UserUncheckedUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUncheckedUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExamDetailUpsertWithWhereUniqueWithoutExamResultInput = {
    where: ExamDetailWhereUniqueInput
    update: XOR<ExamDetailUpdateWithoutExamResultInput, ExamDetailUncheckedUpdateWithoutExamResultInput>
    create: XOR<ExamDetailCreateWithoutExamResultInput, ExamDetailUncheckedCreateWithoutExamResultInput>
  }

  export type ExamDetailUpdateWithWhereUniqueWithoutExamResultInput = {
    where: ExamDetailWhereUniqueInput
    data: XOR<ExamDetailUpdateWithoutExamResultInput, ExamDetailUncheckedUpdateWithoutExamResultInput>
  }

  export type ExamDetailUpdateManyWithWhereWithoutExamResultInput = {
    where: ExamDetailScalarWhereInput
    data: XOR<ExamDetailUpdateManyMutationInput, ExamDetailUncheckedUpdateManyWithoutExamResultInput>
  }

  export type ExamDetailScalarWhereInput = {
    AND?: ExamDetailScalarWhereInput | ExamDetailScalarWhereInput[]
    OR?: ExamDetailScalarWhereInput[]
    NOT?: ExamDetailScalarWhereInput | ExamDetailScalarWhereInput[]
    id?: StringFilter<"ExamDetail"> | string
    examResultId?: StringFilter<"ExamDetail"> | string
    lesson?: StringFilter<"ExamDetail"> | string
    topic?: StringNullableFilter<"ExamDetail"> | string | null
    correct?: IntFilter<"ExamDetail"> | number
    incorrect?: IntFilter<"ExamDetail"> | number
    empty?: IntFilter<"ExamDetail"> | number
    net?: FloatFilter<"ExamDetail"> | number
  }

  export type ExamResultCreateWithoutDetailsInput = {
    id?: string
    examType: $Enums.ExamType
    name?: string | null
    date?: Date | string
    score?: number | null
    user: UserCreateNestedOneWithoutExamResultsInput
  }

  export type ExamResultUncheckedCreateWithoutDetailsInput = {
    id?: string
    userId: string
    examType: $Enums.ExamType
    name?: string | null
    date?: Date | string
    score?: number | null
  }

  export type ExamResultCreateOrConnectWithoutDetailsInput = {
    where: ExamResultWhereUniqueInput
    create: XOR<ExamResultCreateWithoutDetailsInput, ExamResultUncheckedCreateWithoutDetailsInput>
  }

  export type ExamResultUpsertWithoutDetailsInput = {
    update: XOR<ExamResultUpdateWithoutDetailsInput, ExamResultUncheckedUpdateWithoutDetailsInput>
    create: XOR<ExamResultCreateWithoutDetailsInput, ExamResultUncheckedCreateWithoutDetailsInput>
    where?: ExamResultWhereInput
  }

  export type ExamResultUpdateToOneWithWhereWithoutDetailsInput = {
    where?: ExamResultWhereInput
    data: XOR<ExamResultUpdateWithoutDetailsInput, ExamResultUncheckedUpdateWithoutDetailsInput>
  }

  export type ExamResultUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    examType?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutExamResultsNestedInput
  }

  export type ExamResultUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    examType?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UserCreateWithoutStudyPlansInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionCreateNestedManyWithoutUserInput
    examResults?: ExamResultCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    parent?: UserCreateNestedOneWithoutStudentsInput
    students?: UserCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudyPlansInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    parentId?: string | null
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionUncheckedCreateNestedManyWithoutUserInput
    examResults?: ExamResultUncheckedCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    students?: UserUncheckedCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsUncheckedCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudyPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudyPlansInput, UserUncheckedCreateWithoutStudyPlansInput>
  }

  export type UserUpsertWithoutStudyPlansInput = {
    update: XOR<UserUpdateWithoutStudyPlansInput, UserUncheckedUpdateWithoutStudyPlansInput>
    create: XOR<UserCreateWithoutStudyPlansInput, UserUncheckedCreateWithoutStudyPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudyPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudyPlansInput, UserUncheckedUpdateWithoutStudyPlansInput>
  }

  export type UserUpdateWithoutStudyPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    parent?: UserUpdateOneWithoutStudentsNestedInput
    students?: UserUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudyPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUncheckedUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUncheckedUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    students?: UserUncheckedUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUncheckedUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPomodoroSessionsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionCreateNestedManyWithoutUserInput
    examResults?: ExamResultCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    parent?: UserCreateNestedOneWithoutStudentsInput
    students?: UserCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPomodoroSessionsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    parentId?: string | null
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionUncheckedCreateNestedManyWithoutUserInput
    examResults?: ExamResultUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    students?: UserUncheckedCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsUncheckedCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPomodoroSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPomodoroSessionsInput, UserUncheckedCreateWithoutPomodoroSessionsInput>
  }

  export type UserUpsertWithoutPomodoroSessionsInput = {
    update: XOR<UserUpdateWithoutPomodoroSessionsInput, UserUncheckedUpdateWithoutPomodoroSessionsInput>
    create: XOR<UserCreateWithoutPomodoroSessionsInput, UserUncheckedCreateWithoutPomodoroSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPomodoroSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPomodoroSessionsInput, UserUncheckedUpdateWithoutPomodoroSessionsInput>
  }

  export type UserUpdateWithoutPomodoroSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    parent?: UserUpdateOneWithoutStudentsNestedInput
    students?: UserUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPomodoroSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUncheckedUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    students?: UserUncheckedUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUncheckedUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserBadgeCreateWithoutBadgeInput = {
    id?: string
    earnedAt?: Date | string
    user: UserCreateNestedOneWithoutUserBadgesInput
  }

  export type UserBadgeUncheckedCreateWithoutBadgeInput = {
    id?: string
    userId: string
    earnedAt?: Date | string
  }

  export type UserBadgeCreateOrConnectWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeCreateManyBadgeInputEnvelope = {
    data: UserBadgeCreateManyBadgeInput | UserBadgeCreateManyBadgeInput[]
    skipDuplicates?: boolean
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutBadgeInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutBadgeInput>
  }

  export type UserCreateWithoutUserBadgesInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionCreateNestedManyWithoutUserInput
    examResults?: ExamResultCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionCreateNestedManyWithoutUserInput
    parent?: UserCreateNestedOneWithoutStudentsInput
    students?: UserCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserBadgesInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    parentId?: string | null
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionUncheckedCreateNestedManyWithoutUserInput
    examResults?: ExamResultUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionUncheckedCreateNestedManyWithoutUserInput
    students?: UserUncheckedCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsUncheckedCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserBadgesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserBadgesInput, UserUncheckedCreateWithoutUserBadgesInput>
  }

  export type BadgeCreateWithoutUserBadgesInput = {
    id?: string
    name: string
    description: string
    imageUrl?: string | null
    criteriaKey?: string | null
  }

  export type BadgeUncheckedCreateWithoutUserBadgesInput = {
    id?: string
    name: string
    description: string
    imageUrl?: string | null
    criteriaKey?: string | null
  }

  export type BadgeCreateOrConnectWithoutUserBadgesInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
  }

  export type UserUpsertWithoutUserBadgesInput = {
    update: XOR<UserUpdateWithoutUserBadgesInput, UserUncheckedUpdateWithoutUserBadgesInput>
    create: XOR<UserCreateWithoutUserBadgesInput, UserUncheckedCreateWithoutUserBadgesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserBadgesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserBadgesInput, UserUncheckedUpdateWithoutUserBadgesInput>
  }

  export type UserUpdateWithoutUserBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUpdateManyWithoutUserNestedInput
    parent?: UserUpdateOneWithoutStudentsNestedInput
    students?: UserUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUncheckedUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput
    students?: UserUncheckedUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUncheckedUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BadgeUpsertWithoutUserBadgesInput = {
    update: XOR<BadgeUpdateWithoutUserBadgesInput, BadgeUncheckedUpdateWithoutUserBadgesInput>
    create: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
    where?: BadgeWhereInput
  }

  export type BadgeUpdateToOneWithWhereWithoutUserBadgesInput = {
    where?: BadgeWhereInput
    data: XOR<BadgeUpdateWithoutUserBadgesInput, BadgeUncheckedUpdateWithoutUserBadgesInput>
  }

  export type BadgeUpdateWithoutUserBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    criteriaKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BadgeUncheckedUpdateWithoutUserBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    criteriaKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutNotificationSettingsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionCreateNestedManyWithoutUserInput
    examResults?: ExamResultCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    parent?: UserCreateNestedOneWithoutStudentsInput
    students?: UserCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenCreateNestedManyWithoutUserInput
    pomodoroSettings?: PomodoroSettingsCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationSettingsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    parentId?: string | null
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionUncheckedCreateNestedManyWithoutUserInput
    examResults?: ExamResultUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    students?: UserUncheckedCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenUncheckedCreateNestedManyWithoutUserInput
    pomodoroSettings?: PomodoroSettingsUncheckedCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationSettingsInput, UserUncheckedCreateWithoutNotificationSettingsInput>
  }

  export type UserUpsertWithoutNotificationSettingsInput = {
    update: XOR<UserUpdateWithoutNotificationSettingsInput, UserUncheckedUpdateWithoutNotificationSettingsInput>
    create: XOR<UserCreateWithoutNotificationSettingsInput, UserUncheckedCreateWithoutNotificationSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationSettingsInput, UserUncheckedUpdateWithoutNotificationSettingsInput>
  }

  export type UserUpdateWithoutNotificationSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    parent?: UserUpdateOneWithoutStudentsNestedInput
    students?: UserUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUpdateManyWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUncheckedUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    students?: UserUncheckedUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUncheckedUpdateManyWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUncheckedUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPomodoroSettingsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionCreateNestedManyWithoutUserInput
    examResults?: ExamResultCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    parent?: UserCreateNestedOneWithoutStudentsInput
    students?: UserCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPomodoroSettingsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    parentId?: string | null
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionUncheckedCreateNestedManyWithoutUserInput
    examResults?: ExamResultUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    students?: UserUncheckedCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    dailyFocusStats?: DailyFocusStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPomodoroSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPomodoroSettingsInput, UserUncheckedCreateWithoutPomodoroSettingsInput>
  }

  export type UserUpsertWithoutPomodoroSettingsInput = {
    update: XOR<UserUpdateWithoutPomodoroSettingsInput, UserUncheckedUpdateWithoutPomodoroSettingsInput>
    create: XOR<UserCreateWithoutPomodoroSettingsInput, UserUncheckedCreateWithoutPomodoroSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPomodoroSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPomodoroSettingsInput, UserUncheckedUpdateWithoutPomodoroSettingsInput>
  }

  export type UserUpdateWithoutPomodoroSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    parent?: UserUpdateOneWithoutStudentsNestedInput
    students?: UserUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPomodoroSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUncheckedUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    students?: UserUncheckedUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDailyFocusStatsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionCreateNestedManyWithoutUserInput
    examResults?: ExamResultCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeCreateNestedManyWithoutUserInput
    parent?: UserCreateNestedOneWithoutStudentsInput
    students?: UserCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyFocusStatsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
    parentId?: string | null
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    solutions?: QuestionSolutionUncheckedCreateNestedManyWithoutUserInput
    examResults?: ExamResultUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    pomodoroSessions?: PomodoroSessionUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    students?: UserUncheckedCreateNestedManyWithoutParentInput
    pushTokens?: PushTokenUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    pomodoroSettings?: PomodoroSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyFocusStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyFocusStatsInput, UserUncheckedCreateWithoutDailyFocusStatsInput>
  }

  export type UserUpsertWithoutDailyFocusStatsInput = {
    update: XOR<UserUpdateWithoutDailyFocusStatsInput, UserUncheckedUpdateWithoutDailyFocusStatsInput>
    create: XOR<UserCreateWithoutDailyFocusStatsInput, UserUncheckedCreateWithoutDailyFocusStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyFocusStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyFocusStatsInput, UserUncheckedUpdateWithoutDailyFocusStatsInput>
  }

  export type UserUpdateWithoutDailyFocusStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    parent?: UserUpdateOneWithoutStudentsNestedInput
    students?: UserUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyFocusStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUncheckedUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    students?: UserUncheckedUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ChatSessionCreateManyUserInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
  }

  export type QuestionSolutionCreateManyUserInput = {
    id?: string
    imageUrl: string
    ocrText?: string | null
    solution?: string | null
    lesson?: string | null
    createdAt?: Date | string
  }

  export type ExamResultCreateManyUserInput = {
    id?: string
    examType: $Enums.ExamType
    name?: string | null
    date?: Date | string
    score?: number | null
  }

  export type StudyPlanCreateManyUserInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    content: string
    status?: string
    createdAt?: Date | string
  }

  export type PomodoroSessionCreateManyUserInput = {
    id?: string
    duration: number
    lesson?: string | null
    topic?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    completed?: boolean
  }

  export type UserBadgeCreateManyUserInput = {
    id?: string
    badgeId: string
    earnedAt?: Date | string
  }

  export type UserCreateManyParentInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId?: string | null
    password?: string | null
  }

  export type PushTokenCreateManyUserInput = {
    id?: string
    token: string
    platform: string
    createdAt?: Date | string
  }

  export type DailyFocusStatsCreateManyUserInput = {
    id?: string
    date?: Date | string
    totalFocusMinutes?: number
    sessionsCompleted?: number
  }

  export type ChatSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionSolutionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    ocrText?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionSolutionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    ocrText?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionSolutionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    ocrText?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamResultUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    examType?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    details?: ExamDetailUpdateManyWithoutExamResultNestedInput
  }

  export type ExamResultUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    examType?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    details?: ExamDetailUncheckedUpdateManyWithoutExamResultNestedInput
  }

  export type ExamResultUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    examType?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StudyPlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyPlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyPlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PomodoroSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PomodoroSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PomodoroSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lesson?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserBadgeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badge?: BadgeUpdateOneRequiredWithoutUserBadgesNestedInput
  }

  export type UserBadgeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUpdateManyWithoutUserNestedInput
    students?: UserUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    solutions?: QuestionSolutionUncheckedUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    pomodoroSessions?: PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    students?: UserUncheckedUpdateManyWithoutParentNestedInput
    pushTokens?: PushTokenUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    pomodoroSettings?: PomodoroSettingsUncheckedUpdateOneWithoutUserNestedInput
    dailyFocusStats?: DailyFocusStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PushTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyFocusStatsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFocusMinutes?: IntFieldUpdateOperationsInput | number
    sessionsCompleted?: IntFieldUpdateOperationsInput | number
  }

  export type DailyFocusStatsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFocusMinutes?: IntFieldUpdateOperationsInput | number
    sessionsCompleted?: IntFieldUpdateOperationsInput | number
  }

  export type DailyFocusStatsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFocusMinutes?: IntFieldUpdateOperationsInput | number
    sessionsCompleted?: IntFieldUpdateOperationsInput | number
  }

  export type ChatMessageCreateManySessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamDetailCreateManyExamResultInput = {
    id?: string
    lesson: string
    topic?: string | null
    correct: number
    incorrect: number
    empty: number
    net: number
  }

  export type ExamDetailUpdateWithoutExamResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesson?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    correct?: IntFieldUpdateOperationsInput | number
    incorrect?: IntFieldUpdateOperationsInput | number
    empty?: IntFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
  }

  export type ExamDetailUncheckedUpdateWithoutExamResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesson?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    correct?: IntFieldUpdateOperationsInput | number
    incorrect?: IntFieldUpdateOperationsInput | number
    empty?: IntFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
  }

  export type ExamDetailUncheckedUpdateManyWithoutExamResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesson?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    correct?: IntFieldUpdateOperationsInput | number
    incorrect?: IntFieldUpdateOperationsInput | number
    empty?: IntFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
  }

  export type UserBadgeCreateManyBadgeInput = {
    id?: string
    userId: string
    earnedAt?: Date | string
  }

  export type UserBadgeUpdateWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBadgesNestedInput
  }

  export type UserBadgeUncheckedUpdateWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
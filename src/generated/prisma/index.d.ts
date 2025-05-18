
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
 * Model BibleStudy
 * 
 */
export type BibleStudy = $Result.DefaultSelection<Prisma.$BibleStudyPayload>
/**
 * Model Chapter
 * 
 */
export type Chapter = $Result.DefaultSelection<Prisma.$ChapterPayload>
/**
 * Model Paragraph
 * 
 */
export type Paragraph = $Result.DefaultSelection<Prisma.$ParagraphPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BibleStudies
 * const bibleStudies = await prisma.bibleStudy.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more BibleStudies
   * const bibleStudies = await prisma.bibleStudy.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.bibleStudy`: Exposes CRUD operations for the **BibleStudy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BibleStudies
    * const bibleStudies = await prisma.bibleStudy.findMany()
    * ```
    */
  get bibleStudy(): Prisma.BibleStudyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.ChapterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paragraph`: Exposes CRUD operations for the **Paragraph** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paragraphs
    * const paragraphs = await prisma.paragraph.findMany()
    * ```
    */
  get paragraph(): Prisma.ParagraphDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    BibleStudy: 'BibleStudy',
    Chapter: 'Chapter',
    Paragraph: 'Paragraph'
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
      modelProps: "bibleStudy" | "chapter" | "paragraph"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BibleStudy: {
        payload: Prisma.$BibleStudyPayload<ExtArgs>
        fields: Prisma.BibleStudyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BibleStudyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibleStudyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BibleStudyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibleStudyPayload>
          }
          findFirst: {
            args: Prisma.BibleStudyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibleStudyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BibleStudyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibleStudyPayload>
          }
          findMany: {
            args: Prisma.BibleStudyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibleStudyPayload>[]
          }
          create: {
            args: Prisma.BibleStudyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibleStudyPayload>
          }
          createMany: {
            args: Prisma.BibleStudyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BibleStudyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibleStudyPayload>[]
          }
          delete: {
            args: Prisma.BibleStudyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibleStudyPayload>
          }
          update: {
            args: Prisma.BibleStudyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibleStudyPayload>
          }
          deleteMany: {
            args: Prisma.BibleStudyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BibleStudyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BibleStudyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibleStudyPayload>[]
          }
          upsert: {
            args: Prisma.BibleStudyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibleStudyPayload>
          }
          aggregate: {
            args: Prisma.BibleStudyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBibleStudy>
          }
          groupBy: {
            args: Prisma.BibleStudyGroupByArgs<ExtArgs>
            result: $Utils.Optional<BibleStudyGroupByOutputType>[]
          }
          count: {
            args: Prisma.BibleStudyCountArgs<ExtArgs>
            result: $Utils.Optional<BibleStudyCountAggregateOutputType> | number
          }
        }
      }
      Chapter: {
        payload: Prisma.$ChapterPayload<ExtArgs>
        fields: Prisma.ChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findFirst: {
            args: Prisma.ChapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findMany: {
            args: Prisma.ChapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          create: {
            args: Prisma.ChapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          createMany: {
            args: Prisma.ChapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChapterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          delete: {
            args: Prisma.ChapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          update: {
            args: Prisma.ChapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          deleteMany: {
            args: Prisma.ChapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChapterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          upsert: {
            args: Prisma.ChapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          aggregate: {
            args: Prisma.ChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapter>
          }
          groupBy: {
            args: Prisma.ChapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapterCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterCountAggregateOutputType> | number
          }
        }
      }
      Paragraph: {
        payload: Prisma.$ParagraphPayload<ExtArgs>
        fields: Prisma.ParagraphFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParagraphFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParagraphFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>
          }
          findFirst: {
            args: Prisma.ParagraphFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParagraphFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>
          }
          findMany: {
            args: Prisma.ParagraphFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>[]
          }
          create: {
            args: Prisma.ParagraphCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>
          }
          createMany: {
            args: Prisma.ParagraphCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParagraphCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>[]
          }
          delete: {
            args: Prisma.ParagraphDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>
          }
          update: {
            args: Prisma.ParagraphUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>
          }
          deleteMany: {
            args: Prisma.ParagraphDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParagraphUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParagraphUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>[]
          }
          upsert: {
            args: Prisma.ParagraphUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>
          }
          aggregate: {
            args: Prisma.ParagraphAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParagraph>
          }
          groupBy: {
            args: Prisma.ParagraphGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParagraphGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParagraphCountArgs<ExtArgs>
            result: $Utils.Optional<ParagraphCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    bibleStudy?: BibleStudyOmit
    chapter?: ChapterOmit
    paragraph?: ParagraphOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type BibleStudyCountOutputType
   */

  export type BibleStudyCountOutputType = {
    chapters: number
  }

  export type BibleStudyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | BibleStudyCountOutputTypeCountChaptersArgs
  }

  // Custom InputTypes
  /**
   * BibleStudyCountOutputType without action
   */
  export type BibleStudyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibleStudyCountOutputType
     */
    select?: BibleStudyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BibleStudyCountOutputType without action
   */
  export type BibleStudyCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
  }


  /**
   * Count Type ChapterCountOutputType
   */

  export type ChapterCountOutputType = {
    paragraphs: number
  }

  export type ChapterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paragraphs?: boolean | ChapterCountOutputTypeCountParagraphsArgs
  }

  // Custom InputTypes
  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterCountOutputType
     */
    select?: ChapterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountParagraphsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParagraphWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BibleStudy
   */

  export type AggregateBibleStudy = {
    _count: BibleStudyCountAggregateOutputType | null
    _avg: BibleStudyAvgAggregateOutputType | null
    _sum: BibleStudySumAggregateOutputType | null
    _min: BibleStudyMinAggregateOutputType | null
    _max: BibleStudyMaxAggregateOutputType | null
  }

  export type BibleStudyAvgAggregateOutputType = {
    index: number | null
  }

  export type BibleStudySumAggregateOutputType = {
    index: number | null
  }

  export type BibleStudyMinAggregateOutputType = {
    id: string | null
    index: number | null
    imageUrl: string | null
    name: string | null
    slug: string | null
  }

  export type BibleStudyMaxAggregateOutputType = {
    id: string | null
    index: number | null
    imageUrl: string | null
    name: string | null
    slug: string | null
  }

  export type BibleStudyCountAggregateOutputType = {
    id: number
    index: number
    imageUrl: number
    name: number
    slug: number
    _all: number
  }


  export type BibleStudyAvgAggregateInputType = {
    index?: true
  }

  export type BibleStudySumAggregateInputType = {
    index?: true
  }

  export type BibleStudyMinAggregateInputType = {
    id?: true
    index?: true
    imageUrl?: true
    name?: true
    slug?: true
  }

  export type BibleStudyMaxAggregateInputType = {
    id?: true
    index?: true
    imageUrl?: true
    name?: true
    slug?: true
  }

  export type BibleStudyCountAggregateInputType = {
    id?: true
    index?: true
    imageUrl?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type BibleStudyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BibleStudy to aggregate.
     */
    where?: BibleStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BibleStudies to fetch.
     */
    orderBy?: BibleStudyOrderByWithRelationInput | BibleStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BibleStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BibleStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BibleStudies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BibleStudies
    **/
    _count?: true | BibleStudyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BibleStudyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BibleStudySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BibleStudyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BibleStudyMaxAggregateInputType
  }

  export type GetBibleStudyAggregateType<T extends BibleStudyAggregateArgs> = {
        [P in keyof T & keyof AggregateBibleStudy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBibleStudy[P]>
      : GetScalarType<T[P], AggregateBibleStudy[P]>
  }




  export type BibleStudyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BibleStudyWhereInput
    orderBy?: BibleStudyOrderByWithAggregationInput | BibleStudyOrderByWithAggregationInput[]
    by: BibleStudyScalarFieldEnum[] | BibleStudyScalarFieldEnum
    having?: BibleStudyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BibleStudyCountAggregateInputType | true
    _avg?: BibleStudyAvgAggregateInputType
    _sum?: BibleStudySumAggregateInputType
    _min?: BibleStudyMinAggregateInputType
    _max?: BibleStudyMaxAggregateInputType
  }

  export type BibleStudyGroupByOutputType = {
    id: string
    index: number
    imageUrl: string | null
    name: string
    slug: string
    _count: BibleStudyCountAggregateOutputType | null
    _avg: BibleStudyAvgAggregateOutputType | null
    _sum: BibleStudySumAggregateOutputType | null
    _min: BibleStudyMinAggregateOutputType | null
    _max: BibleStudyMaxAggregateOutputType | null
  }

  type GetBibleStudyGroupByPayload<T extends BibleStudyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BibleStudyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BibleStudyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BibleStudyGroupByOutputType[P]>
            : GetScalarType<T[P], BibleStudyGroupByOutputType[P]>
        }
      >
    >


  export type BibleStudySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    imageUrl?: boolean
    name?: boolean
    slug?: boolean
    chapters?: boolean | BibleStudy$chaptersArgs<ExtArgs>
    _count?: boolean | BibleStudyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bibleStudy"]>

  export type BibleStudySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    imageUrl?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["bibleStudy"]>

  export type BibleStudySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    imageUrl?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["bibleStudy"]>

  export type BibleStudySelectScalar = {
    id?: boolean
    index?: boolean
    imageUrl?: boolean
    name?: boolean
    slug?: boolean
  }

  export type BibleStudyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "index" | "imageUrl" | "name" | "slug", ExtArgs["result"]["bibleStudy"]>
  export type BibleStudyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | BibleStudy$chaptersArgs<ExtArgs>
    _count?: boolean | BibleStudyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BibleStudyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BibleStudyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BibleStudyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BibleStudy"
    objects: {
      chapters: Prisma.$ChapterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      index: number
      imageUrl: string | null
      name: string
      slug: string
    }, ExtArgs["result"]["bibleStudy"]>
    composites: {}
  }

  type BibleStudyGetPayload<S extends boolean | null | undefined | BibleStudyDefaultArgs> = $Result.GetResult<Prisma.$BibleStudyPayload, S>

  type BibleStudyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BibleStudyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BibleStudyCountAggregateInputType | true
    }

  export interface BibleStudyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BibleStudy'], meta: { name: 'BibleStudy' } }
    /**
     * Find zero or one BibleStudy that matches the filter.
     * @param {BibleStudyFindUniqueArgs} args - Arguments to find a BibleStudy
     * @example
     * // Get one BibleStudy
     * const bibleStudy = await prisma.bibleStudy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BibleStudyFindUniqueArgs>(args: SelectSubset<T, BibleStudyFindUniqueArgs<ExtArgs>>): Prisma__BibleStudyClient<$Result.GetResult<Prisma.$BibleStudyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BibleStudy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BibleStudyFindUniqueOrThrowArgs} args - Arguments to find a BibleStudy
     * @example
     * // Get one BibleStudy
     * const bibleStudy = await prisma.bibleStudy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BibleStudyFindUniqueOrThrowArgs>(args: SelectSubset<T, BibleStudyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BibleStudyClient<$Result.GetResult<Prisma.$BibleStudyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BibleStudy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibleStudyFindFirstArgs} args - Arguments to find a BibleStudy
     * @example
     * // Get one BibleStudy
     * const bibleStudy = await prisma.bibleStudy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BibleStudyFindFirstArgs>(args?: SelectSubset<T, BibleStudyFindFirstArgs<ExtArgs>>): Prisma__BibleStudyClient<$Result.GetResult<Prisma.$BibleStudyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BibleStudy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibleStudyFindFirstOrThrowArgs} args - Arguments to find a BibleStudy
     * @example
     * // Get one BibleStudy
     * const bibleStudy = await prisma.bibleStudy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BibleStudyFindFirstOrThrowArgs>(args?: SelectSubset<T, BibleStudyFindFirstOrThrowArgs<ExtArgs>>): Prisma__BibleStudyClient<$Result.GetResult<Prisma.$BibleStudyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BibleStudies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibleStudyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BibleStudies
     * const bibleStudies = await prisma.bibleStudy.findMany()
     * 
     * // Get first 10 BibleStudies
     * const bibleStudies = await prisma.bibleStudy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bibleStudyWithIdOnly = await prisma.bibleStudy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BibleStudyFindManyArgs>(args?: SelectSubset<T, BibleStudyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BibleStudyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BibleStudy.
     * @param {BibleStudyCreateArgs} args - Arguments to create a BibleStudy.
     * @example
     * // Create one BibleStudy
     * const BibleStudy = await prisma.bibleStudy.create({
     *   data: {
     *     // ... data to create a BibleStudy
     *   }
     * })
     * 
     */
    create<T extends BibleStudyCreateArgs>(args: SelectSubset<T, BibleStudyCreateArgs<ExtArgs>>): Prisma__BibleStudyClient<$Result.GetResult<Prisma.$BibleStudyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BibleStudies.
     * @param {BibleStudyCreateManyArgs} args - Arguments to create many BibleStudies.
     * @example
     * // Create many BibleStudies
     * const bibleStudy = await prisma.bibleStudy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BibleStudyCreateManyArgs>(args?: SelectSubset<T, BibleStudyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BibleStudies and returns the data saved in the database.
     * @param {BibleStudyCreateManyAndReturnArgs} args - Arguments to create many BibleStudies.
     * @example
     * // Create many BibleStudies
     * const bibleStudy = await prisma.bibleStudy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BibleStudies and only return the `id`
     * const bibleStudyWithIdOnly = await prisma.bibleStudy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BibleStudyCreateManyAndReturnArgs>(args?: SelectSubset<T, BibleStudyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BibleStudyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BibleStudy.
     * @param {BibleStudyDeleteArgs} args - Arguments to delete one BibleStudy.
     * @example
     * // Delete one BibleStudy
     * const BibleStudy = await prisma.bibleStudy.delete({
     *   where: {
     *     // ... filter to delete one BibleStudy
     *   }
     * })
     * 
     */
    delete<T extends BibleStudyDeleteArgs>(args: SelectSubset<T, BibleStudyDeleteArgs<ExtArgs>>): Prisma__BibleStudyClient<$Result.GetResult<Prisma.$BibleStudyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BibleStudy.
     * @param {BibleStudyUpdateArgs} args - Arguments to update one BibleStudy.
     * @example
     * // Update one BibleStudy
     * const bibleStudy = await prisma.bibleStudy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BibleStudyUpdateArgs>(args: SelectSubset<T, BibleStudyUpdateArgs<ExtArgs>>): Prisma__BibleStudyClient<$Result.GetResult<Prisma.$BibleStudyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BibleStudies.
     * @param {BibleStudyDeleteManyArgs} args - Arguments to filter BibleStudies to delete.
     * @example
     * // Delete a few BibleStudies
     * const { count } = await prisma.bibleStudy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BibleStudyDeleteManyArgs>(args?: SelectSubset<T, BibleStudyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BibleStudies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibleStudyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BibleStudies
     * const bibleStudy = await prisma.bibleStudy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BibleStudyUpdateManyArgs>(args: SelectSubset<T, BibleStudyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BibleStudies and returns the data updated in the database.
     * @param {BibleStudyUpdateManyAndReturnArgs} args - Arguments to update many BibleStudies.
     * @example
     * // Update many BibleStudies
     * const bibleStudy = await prisma.bibleStudy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BibleStudies and only return the `id`
     * const bibleStudyWithIdOnly = await prisma.bibleStudy.updateManyAndReturn({
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
    updateManyAndReturn<T extends BibleStudyUpdateManyAndReturnArgs>(args: SelectSubset<T, BibleStudyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BibleStudyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BibleStudy.
     * @param {BibleStudyUpsertArgs} args - Arguments to update or create a BibleStudy.
     * @example
     * // Update or create a BibleStudy
     * const bibleStudy = await prisma.bibleStudy.upsert({
     *   create: {
     *     // ... data to create a BibleStudy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BibleStudy we want to update
     *   }
     * })
     */
    upsert<T extends BibleStudyUpsertArgs>(args: SelectSubset<T, BibleStudyUpsertArgs<ExtArgs>>): Prisma__BibleStudyClient<$Result.GetResult<Prisma.$BibleStudyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BibleStudies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibleStudyCountArgs} args - Arguments to filter BibleStudies to count.
     * @example
     * // Count the number of BibleStudies
     * const count = await prisma.bibleStudy.count({
     *   where: {
     *     // ... the filter for the BibleStudies we want to count
     *   }
     * })
    **/
    count<T extends BibleStudyCountArgs>(
      args?: Subset<T, BibleStudyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BibleStudyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BibleStudy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibleStudyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BibleStudyAggregateArgs>(args: Subset<T, BibleStudyAggregateArgs>): Prisma.PrismaPromise<GetBibleStudyAggregateType<T>>

    /**
     * Group by BibleStudy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibleStudyGroupByArgs} args - Group by arguments.
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
      T extends BibleStudyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BibleStudyGroupByArgs['orderBy'] }
        : { orderBy?: BibleStudyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BibleStudyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBibleStudyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BibleStudy model
   */
  readonly fields: BibleStudyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BibleStudy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BibleStudyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapters<T extends BibleStudy$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, BibleStudy$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BibleStudy model
   */
  interface BibleStudyFieldRefs {
    readonly id: FieldRef<"BibleStudy", 'String'>
    readonly index: FieldRef<"BibleStudy", 'Int'>
    readonly imageUrl: FieldRef<"BibleStudy", 'String'>
    readonly name: FieldRef<"BibleStudy", 'String'>
    readonly slug: FieldRef<"BibleStudy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BibleStudy findUnique
   */
  export type BibleStudyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibleStudy
     */
    select?: BibleStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BibleStudy
     */
    omit?: BibleStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibleStudyInclude<ExtArgs> | null
    /**
     * Filter, which BibleStudy to fetch.
     */
    where: BibleStudyWhereUniqueInput
  }

  /**
   * BibleStudy findUniqueOrThrow
   */
  export type BibleStudyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibleStudy
     */
    select?: BibleStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BibleStudy
     */
    omit?: BibleStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibleStudyInclude<ExtArgs> | null
    /**
     * Filter, which BibleStudy to fetch.
     */
    where: BibleStudyWhereUniqueInput
  }

  /**
   * BibleStudy findFirst
   */
  export type BibleStudyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibleStudy
     */
    select?: BibleStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BibleStudy
     */
    omit?: BibleStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibleStudyInclude<ExtArgs> | null
    /**
     * Filter, which BibleStudy to fetch.
     */
    where?: BibleStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BibleStudies to fetch.
     */
    orderBy?: BibleStudyOrderByWithRelationInput | BibleStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BibleStudies.
     */
    cursor?: BibleStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BibleStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BibleStudies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BibleStudies.
     */
    distinct?: BibleStudyScalarFieldEnum | BibleStudyScalarFieldEnum[]
  }

  /**
   * BibleStudy findFirstOrThrow
   */
  export type BibleStudyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibleStudy
     */
    select?: BibleStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BibleStudy
     */
    omit?: BibleStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibleStudyInclude<ExtArgs> | null
    /**
     * Filter, which BibleStudy to fetch.
     */
    where?: BibleStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BibleStudies to fetch.
     */
    orderBy?: BibleStudyOrderByWithRelationInput | BibleStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BibleStudies.
     */
    cursor?: BibleStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BibleStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BibleStudies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BibleStudies.
     */
    distinct?: BibleStudyScalarFieldEnum | BibleStudyScalarFieldEnum[]
  }

  /**
   * BibleStudy findMany
   */
  export type BibleStudyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibleStudy
     */
    select?: BibleStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BibleStudy
     */
    omit?: BibleStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibleStudyInclude<ExtArgs> | null
    /**
     * Filter, which BibleStudies to fetch.
     */
    where?: BibleStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BibleStudies to fetch.
     */
    orderBy?: BibleStudyOrderByWithRelationInput | BibleStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BibleStudies.
     */
    cursor?: BibleStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BibleStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BibleStudies.
     */
    skip?: number
    distinct?: BibleStudyScalarFieldEnum | BibleStudyScalarFieldEnum[]
  }

  /**
   * BibleStudy create
   */
  export type BibleStudyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibleStudy
     */
    select?: BibleStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BibleStudy
     */
    omit?: BibleStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibleStudyInclude<ExtArgs> | null
    /**
     * The data needed to create a BibleStudy.
     */
    data: XOR<BibleStudyCreateInput, BibleStudyUncheckedCreateInput>
  }

  /**
   * BibleStudy createMany
   */
  export type BibleStudyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BibleStudies.
     */
    data: BibleStudyCreateManyInput | BibleStudyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BibleStudy createManyAndReturn
   */
  export type BibleStudyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibleStudy
     */
    select?: BibleStudySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BibleStudy
     */
    omit?: BibleStudyOmit<ExtArgs> | null
    /**
     * The data used to create many BibleStudies.
     */
    data: BibleStudyCreateManyInput | BibleStudyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BibleStudy update
   */
  export type BibleStudyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibleStudy
     */
    select?: BibleStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BibleStudy
     */
    omit?: BibleStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibleStudyInclude<ExtArgs> | null
    /**
     * The data needed to update a BibleStudy.
     */
    data: XOR<BibleStudyUpdateInput, BibleStudyUncheckedUpdateInput>
    /**
     * Choose, which BibleStudy to update.
     */
    where: BibleStudyWhereUniqueInput
  }

  /**
   * BibleStudy updateMany
   */
  export type BibleStudyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BibleStudies.
     */
    data: XOR<BibleStudyUpdateManyMutationInput, BibleStudyUncheckedUpdateManyInput>
    /**
     * Filter which BibleStudies to update
     */
    where?: BibleStudyWhereInput
    /**
     * Limit how many BibleStudies to update.
     */
    limit?: number
  }

  /**
   * BibleStudy updateManyAndReturn
   */
  export type BibleStudyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibleStudy
     */
    select?: BibleStudySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BibleStudy
     */
    omit?: BibleStudyOmit<ExtArgs> | null
    /**
     * The data used to update BibleStudies.
     */
    data: XOR<BibleStudyUpdateManyMutationInput, BibleStudyUncheckedUpdateManyInput>
    /**
     * Filter which BibleStudies to update
     */
    where?: BibleStudyWhereInput
    /**
     * Limit how many BibleStudies to update.
     */
    limit?: number
  }

  /**
   * BibleStudy upsert
   */
  export type BibleStudyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibleStudy
     */
    select?: BibleStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BibleStudy
     */
    omit?: BibleStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibleStudyInclude<ExtArgs> | null
    /**
     * The filter to search for the BibleStudy to update in case it exists.
     */
    where: BibleStudyWhereUniqueInput
    /**
     * In case the BibleStudy found by the `where` argument doesn't exist, create a new BibleStudy with this data.
     */
    create: XOR<BibleStudyCreateInput, BibleStudyUncheckedCreateInput>
    /**
     * In case the BibleStudy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BibleStudyUpdateInput, BibleStudyUncheckedUpdateInput>
  }

  /**
   * BibleStudy delete
   */
  export type BibleStudyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibleStudy
     */
    select?: BibleStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BibleStudy
     */
    omit?: BibleStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibleStudyInclude<ExtArgs> | null
    /**
     * Filter which BibleStudy to delete.
     */
    where: BibleStudyWhereUniqueInput
  }

  /**
   * BibleStudy deleteMany
   */
  export type BibleStudyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BibleStudies to delete
     */
    where?: BibleStudyWhereInput
    /**
     * Limit how many BibleStudies to delete.
     */
    limit?: number
  }

  /**
   * BibleStudy.chapters
   */
  export type BibleStudy$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    cursor?: ChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * BibleStudy without action
   */
  export type BibleStudyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibleStudy
     */
    select?: BibleStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BibleStudy
     */
    omit?: BibleStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibleStudyInclude<ExtArgs> | null
  }


  /**
   * Model Chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterAvgAggregateOutputType = {
    index: number | null
  }

  export type ChapterSumAggregateOutputType = {
    index: number | null
  }

  export type ChapterMinAggregateOutputType = {
    id: string | null
    index: number | null
    title: string | null
    slug: string | null
    bibleStudyId: string | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: string | null
    index: number | null
    title: string | null
    slug: string | null
    bibleStudyId: string | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    index: number
    title: number
    slug: number
    bibleStudyId: number
    _all: number
  }


  export type ChapterAvgAggregateInputType = {
    index?: true
  }

  export type ChapterSumAggregateInputType = {
    index?: true
  }

  export type ChapterMinAggregateInputType = {
    id?: true
    index?: true
    title?: true
    slug?: true
    bibleStudyId?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    index?: true
    title?: true
    slug?: true
    bibleStudyId?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    index?: true
    title?: true
    slug?: true
    bibleStudyId?: true
    _all?: true
  }

  export type ChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapter to aggregate.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type ChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithAggregationInput | ChapterOrderByWithAggregationInput[]
    by: ChapterScalarFieldEnum[] | ChapterScalarFieldEnum
    having?: ChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _avg?: ChapterAvgAggregateInputType
    _sum?: ChapterSumAggregateInputType
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: string
    index: number
    title: string
    slug: string
    bibleStudyId: string | null
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type ChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    title?: boolean
    slug?: boolean
    bibleStudyId?: boolean
    paragraphs?: boolean | Chapter$paragraphsArgs<ExtArgs>
    bibleStudy?: boolean | Chapter$bibleStudyArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    title?: boolean
    slug?: boolean
    bibleStudyId?: boolean
    bibleStudy?: boolean | Chapter$bibleStudyArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    title?: boolean
    slug?: boolean
    bibleStudyId?: boolean
    bibleStudy?: boolean | Chapter$bibleStudyArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectScalar = {
    id?: boolean
    index?: boolean
    title?: boolean
    slug?: boolean
    bibleStudyId?: boolean
  }

  export type ChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "index" | "title" | "slug" | "bibleStudyId", ExtArgs["result"]["chapter"]>
  export type ChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paragraphs?: boolean | Chapter$paragraphsArgs<ExtArgs>
    bibleStudy?: boolean | Chapter$bibleStudyArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChapterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bibleStudy?: boolean | Chapter$bibleStudyArgs<ExtArgs>
  }
  export type ChapterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bibleStudy?: boolean | Chapter$bibleStudyArgs<ExtArgs>
  }

  export type $ChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapter"
    objects: {
      paragraphs: Prisma.$ParagraphPayload<ExtArgs>[]
      bibleStudy: Prisma.$BibleStudyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      index: number
      title: string
      slug: string
      bibleStudyId: string | null
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }

  type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = $Result.GetResult<Prisma.$ChapterPayload, S>

  type ChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface ChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapter'], meta: { name: 'Chapter' } }
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterFindUniqueArgs>(args: SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterFindFirstArgs>(args?: SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapterFindManyArgs>(args?: SelectSubset<T, ChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
     */
    create<T extends ChapterCreateArgs>(args: SelectSubset<T, ChapterCreateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {ChapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapterCreateManyArgs>(args?: SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chapters and returns the data saved in the database.
     * @param {ChapterCreateManyAndReturnArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChapterCreateManyAndReturnArgs>(args?: SelectSubset<T, ChapterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
     */
    delete<T extends ChapterDeleteArgs>(args: SelectSubset<T, ChapterDeleteArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapterUpdateArgs>(args: SelectSubset<T, ChapterUpdateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapterDeleteManyArgs>(args?: SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapterUpdateManyArgs>(args: SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters and returns the data updated in the database.
     * @param {ChapterUpdateManyAndReturnArgs} args - Arguments to update many Chapters.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChapterUpdateManyAndReturnArgs>(args: SelectSubset<T, ChapterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends ChapterUpsertArgs>(args: SelectSubset<T, ChapterUpsertArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(
      args?: Subset<T, ChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
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
      T extends ChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterGroupByArgs['orderBy'] }
        : { orderBy?: ChapterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapter model
   */
  readonly fields: ChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paragraphs<T extends Chapter$paragraphsArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$paragraphsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bibleStudy<T extends Chapter$bibleStudyArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$bibleStudyArgs<ExtArgs>>): Prisma__BibleStudyClient<$Result.GetResult<Prisma.$BibleStudyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Chapter model
   */
  interface ChapterFieldRefs {
    readonly id: FieldRef<"Chapter", 'String'>
    readonly index: FieldRef<"Chapter", 'Int'>
    readonly title: FieldRef<"Chapter", 'String'>
    readonly slug: FieldRef<"Chapter", 'String'>
    readonly bibleStudyId: FieldRef<"Chapter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chapter findUnique
   */
  export type ChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findUniqueOrThrow
   */
  export type ChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findFirst
   */
  export type ChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findFirstOrThrow
   */
  export type ChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findMany
   */
  export type ChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter create
   */
  export type ChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapter.
     */
    data: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
  }

  /**
   * Chapter createMany
   */
  export type ChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapter createManyAndReturn
   */
  export type ChapterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter update
   */
  export type ChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapter.
     */
    data: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
    /**
     * Choose, which Chapter to update.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter updateMany
   */
  export type ChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapter updateManyAndReturn
   */
  export type ChapterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter upsert
   */
  export type ChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapter to update in case it exists.
     */
    where: ChapterWhereUniqueInput
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     */
    create: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
  }

  /**
   * Chapter delete
   */
  export type ChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter which Chapter to delete.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter deleteMany
   */
  export type ChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number
  }

  /**
   * Chapter.paragraphs
   */
  export type Chapter$paragraphsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    where?: ParagraphWhereInput
    orderBy?: ParagraphOrderByWithRelationInput | ParagraphOrderByWithRelationInput[]
    cursor?: ParagraphWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParagraphScalarFieldEnum | ParagraphScalarFieldEnum[]
  }

  /**
   * Chapter.bibleStudy
   */
  export type Chapter$bibleStudyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibleStudy
     */
    select?: BibleStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BibleStudy
     */
    omit?: BibleStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibleStudyInclude<ExtArgs> | null
    where?: BibleStudyWhereInput
  }

  /**
   * Chapter without action
   */
  export type ChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
  }


  /**
   * Model Paragraph
   */

  export type AggregateParagraph = {
    _count: ParagraphCountAggregateOutputType | null
    _avg: ParagraphAvgAggregateOutputType | null
    _sum: ParagraphSumAggregateOutputType | null
    _min: ParagraphMinAggregateOutputType | null
    _max: ParagraphMaxAggregateOutputType | null
  }

  export type ParagraphAvgAggregateOutputType = {
    number: number | null
  }

  export type ParagraphSumAggregateOutputType = {
    number: number | null
  }

  export type ParagraphMinAggregateOutputType = {
    id: string | null
    line: string | null
    number: number | null
    isTag: boolean | null
    chapterId: string | null
  }

  export type ParagraphMaxAggregateOutputType = {
    id: string | null
    line: string | null
    number: number | null
    isTag: boolean | null
    chapterId: string | null
  }

  export type ParagraphCountAggregateOutputType = {
    id: number
    line: number
    number: number
    isTag: number
    chapterId: number
    _all: number
  }


  export type ParagraphAvgAggregateInputType = {
    number?: true
  }

  export type ParagraphSumAggregateInputType = {
    number?: true
  }

  export type ParagraphMinAggregateInputType = {
    id?: true
    line?: true
    number?: true
    isTag?: true
    chapterId?: true
  }

  export type ParagraphMaxAggregateInputType = {
    id?: true
    line?: true
    number?: true
    isTag?: true
    chapterId?: true
  }

  export type ParagraphCountAggregateInputType = {
    id?: true
    line?: true
    number?: true
    isTag?: true
    chapterId?: true
    _all?: true
  }

  export type ParagraphAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paragraph to aggregate.
     */
    where?: ParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paragraphs to fetch.
     */
    orderBy?: ParagraphOrderByWithRelationInput | ParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paragraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paragraphs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paragraphs
    **/
    _count?: true | ParagraphCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParagraphAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParagraphSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParagraphMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParagraphMaxAggregateInputType
  }

  export type GetParagraphAggregateType<T extends ParagraphAggregateArgs> = {
        [P in keyof T & keyof AggregateParagraph]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParagraph[P]>
      : GetScalarType<T[P], AggregateParagraph[P]>
  }




  export type ParagraphGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParagraphWhereInput
    orderBy?: ParagraphOrderByWithAggregationInput | ParagraphOrderByWithAggregationInput[]
    by: ParagraphScalarFieldEnum[] | ParagraphScalarFieldEnum
    having?: ParagraphScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParagraphCountAggregateInputType | true
    _avg?: ParagraphAvgAggregateInputType
    _sum?: ParagraphSumAggregateInputType
    _min?: ParagraphMinAggregateInputType
    _max?: ParagraphMaxAggregateInputType
  }

  export type ParagraphGroupByOutputType = {
    id: string
    line: string
    number: number
    isTag: boolean
    chapterId: string | null
    _count: ParagraphCountAggregateOutputType | null
    _avg: ParagraphAvgAggregateOutputType | null
    _sum: ParagraphSumAggregateOutputType | null
    _min: ParagraphMinAggregateOutputType | null
    _max: ParagraphMaxAggregateOutputType | null
  }

  type GetParagraphGroupByPayload<T extends ParagraphGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParagraphGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParagraphGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParagraphGroupByOutputType[P]>
            : GetScalarType<T[P], ParagraphGroupByOutputType[P]>
        }
      >
    >


  export type ParagraphSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    line?: boolean
    number?: boolean
    isTag?: boolean
    chapterId?: boolean
    chapter?: boolean | Paragraph$chapterArgs<ExtArgs>
  }, ExtArgs["result"]["paragraph"]>

  export type ParagraphSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    line?: boolean
    number?: boolean
    isTag?: boolean
    chapterId?: boolean
    chapter?: boolean | Paragraph$chapterArgs<ExtArgs>
  }, ExtArgs["result"]["paragraph"]>

  export type ParagraphSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    line?: boolean
    number?: boolean
    isTag?: boolean
    chapterId?: boolean
    chapter?: boolean | Paragraph$chapterArgs<ExtArgs>
  }, ExtArgs["result"]["paragraph"]>

  export type ParagraphSelectScalar = {
    id?: boolean
    line?: boolean
    number?: boolean
    isTag?: boolean
    chapterId?: boolean
  }

  export type ParagraphOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "line" | "number" | "isTag" | "chapterId", ExtArgs["result"]["paragraph"]>
  export type ParagraphInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | Paragraph$chapterArgs<ExtArgs>
  }
  export type ParagraphIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | Paragraph$chapterArgs<ExtArgs>
  }
  export type ParagraphIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | Paragraph$chapterArgs<ExtArgs>
  }

  export type $ParagraphPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paragraph"
    objects: {
      chapter: Prisma.$ChapterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      line: string
      number: number
      isTag: boolean
      chapterId: string | null
    }, ExtArgs["result"]["paragraph"]>
    composites: {}
  }

  type ParagraphGetPayload<S extends boolean | null | undefined | ParagraphDefaultArgs> = $Result.GetResult<Prisma.$ParagraphPayload, S>

  type ParagraphCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParagraphFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParagraphCountAggregateInputType | true
    }

  export interface ParagraphDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paragraph'], meta: { name: 'Paragraph' } }
    /**
     * Find zero or one Paragraph that matches the filter.
     * @param {ParagraphFindUniqueArgs} args - Arguments to find a Paragraph
     * @example
     * // Get one Paragraph
     * const paragraph = await prisma.paragraph.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParagraphFindUniqueArgs>(args: SelectSubset<T, ParagraphFindUniqueArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paragraph that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParagraphFindUniqueOrThrowArgs} args - Arguments to find a Paragraph
     * @example
     * // Get one Paragraph
     * const paragraph = await prisma.paragraph.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParagraphFindUniqueOrThrowArgs>(args: SelectSubset<T, ParagraphFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paragraph that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParagraphFindFirstArgs} args - Arguments to find a Paragraph
     * @example
     * // Get one Paragraph
     * const paragraph = await prisma.paragraph.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParagraphFindFirstArgs>(args?: SelectSubset<T, ParagraphFindFirstArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paragraph that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParagraphFindFirstOrThrowArgs} args - Arguments to find a Paragraph
     * @example
     * // Get one Paragraph
     * const paragraph = await prisma.paragraph.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParagraphFindFirstOrThrowArgs>(args?: SelectSubset<T, ParagraphFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paragraphs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParagraphFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paragraphs
     * const paragraphs = await prisma.paragraph.findMany()
     * 
     * // Get first 10 Paragraphs
     * const paragraphs = await prisma.paragraph.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paragraphWithIdOnly = await prisma.paragraph.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParagraphFindManyArgs>(args?: SelectSubset<T, ParagraphFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paragraph.
     * @param {ParagraphCreateArgs} args - Arguments to create a Paragraph.
     * @example
     * // Create one Paragraph
     * const Paragraph = await prisma.paragraph.create({
     *   data: {
     *     // ... data to create a Paragraph
     *   }
     * })
     * 
     */
    create<T extends ParagraphCreateArgs>(args: SelectSubset<T, ParagraphCreateArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paragraphs.
     * @param {ParagraphCreateManyArgs} args - Arguments to create many Paragraphs.
     * @example
     * // Create many Paragraphs
     * const paragraph = await prisma.paragraph.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParagraphCreateManyArgs>(args?: SelectSubset<T, ParagraphCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paragraphs and returns the data saved in the database.
     * @param {ParagraphCreateManyAndReturnArgs} args - Arguments to create many Paragraphs.
     * @example
     * // Create many Paragraphs
     * const paragraph = await prisma.paragraph.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paragraphs and only return the `id`
     * const paragraphWithIdOnly = await prisma.paragraph.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParagraphCreateManyAndReturnArgs>(args?: SelectSubset<T, ParagraphCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paragraph.
     * @param {ParagraphDeleteArgs} args - Arguments to delete one Paragraph.
     * @example
     * // Delete one Paragraph
     * const Paragraph = await prisma.paragraph.delete({
     *   where: {
     *     // ... filter to delete one Paragraph
     *   }
     * })
     * 
     */
    delete<T extends ParagraphDeleteArgs>(args: SelectSubset<T, ParagraphDeleteArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paragraph.
     * @param {ParagraphUpdateArgs} args - Arguments to update one Paragraph.
     * @example
     * // Update one Paragraph
     * const paragraph = await prisma.paragraph.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParagraphUpdateArgs>(args: SelectSubset<T, ParagraphUpdateArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paragraphs.
     * @param {ParagraphDeleteManyArgs} args - Arguments to filter Paragraphs to delete.
     * @example
     * // Delete a few Paragraphs
     * const { count } = await prisma.paragraph.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParagraphDeleteManyArgs>(args?: SelectSubset<T, ParagraphDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paragraphs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParagraphUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paragraphs
     * const paragraph = await prisma.paragraph.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParagraphUpdateManyArgs>(args: SelectSubset<T, ParagraphUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paragraphs and returns the data updated in the database.
     * @param {ParagraphUpdateManyAndReturnArgs} args - Arguments to update many Paragraphs.
     * @example
     * // Update many Paragraphs
     * const paragraph = await prisma.paragraph.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Paragraphs and only return the `id`
     * const paragraphWithIdOnly = await prisma.paragraph.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParagraphUpdateManyAndReturnArgs>(args: SelectSubset<T, ParagraphUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paragraph.
     * @param {ParagraphUpsertArgs} args - Arguments to update or create a Paragraph.
     * @example
     * // Update or create a Paragraph
     * const paragraph = await prisma.paragraph.upsert({
     *   create: {
     *     // ... data to create a Paragraph
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paragraph we want to update
     *   }
     * })
     */
    upsert<T extends ParagraphUpsertArgs>(args: SelectSubset<T, ParagraphUpsertArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paragraphs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParagraphCountArgs} args - Arguments to filter Paragraphs to count.
     * @example
     * // Count the number of Paragraphs
     * const count = await prisma.paragraph.count({
     *   where: {
     *     // ... the filter for the Paragraphs we want to count
     *   }
     * })
    **/
    count<T extends ParagraphCountArgs>(
      args?: Subset<T, ParagraphCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParagraphCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paragraph.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParagraphAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParagraphAggregateArgs>(args: Subset<T, ParagraphAggregateArgs>): Prisma.PrismaPromise<GetParagraphAggregateType<T>>

    /**
     * Group by Paragraph.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParagraphGroupByArgs} args - Group by arguments.
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
      T extends ParagraphGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParagraphGroupByArgs['orderBy'] }
        : { orderBy?: ParagraphGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParagraphGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParagraphGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paragraph model
   */
  readonly fields: ParagraphFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paragraph.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParagraphClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapter<T extends Paragraph$chapterArgs<ExtArgs> = {}>(args?: Subset<T, Paragraph$chapterArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Paragraph model
   */
  interface ParagraphFieldRefs {
    readonly id: FieldRef<"Paragraph", 'String'>
    readonly line: FieldRef<"Paragraph", 'String'>
    readonly number: FieldRef<"Paragraph", 'Int'>
    readonly isTag: FieldRef<"Paragraph", 'Boolean'>
    readonly chapterId: FieldRef<"Paragraph", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Paragraph findUnique
   */
  export type ParagraphFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * Filter, which Paragraph to fetch.
     */
    where: ParagraphWhereUniqueInput
  }

  /**
   * Paragraph findUniqueOrThrow
   */
  export type ParagraphFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * Filter, which Paragraph to fetch.
     */
    where: ParagraphWhereUniqueInput
  }

  /**
   * Paragraph findFirst
   */
  export type ParagraphFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * Filter, which Paragraph to fetch.
     */
    where?: ParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paragraphs to fetch.
     */
    orderBy?: ParagraphOrderByWithRelationInput | ParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paragraphs.
     */
    cursor?: ParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paragraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paragraphs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paragraphs.
     */
    distinct?: ParagraphScalarFieldEnum | ParagraphScalarFieldEnum[]
  }

  /**
   * Paragraph findFirstOrThrow
   */
  export type ParagraphFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * Filter, which Paragraph to fetch.
     */
    where?: ParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paragraphs to fetch.
     */
    orderBy?: ParagraphOrderByWithRelationInput | ParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paragraphs.
     */
    cursor?: ParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paragraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paragraphs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paragraphs.
     */
    distinct?: ParagraphScalarFieldEnum | ParagraphScalarFieldEnum[]
  }

  /**
   * Paragraph findMany
   */
  export type ParagraphFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * Filter, which Paragraphs to fetch.
     */
    where?: ParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paragraphs to fetch.
     */
    orderBy?: ParagraphOrderByWithRelationInput | ParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paragraphs.
     */
    cursor?: ParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paragraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paragraphs.
     */
    skip?: number
    distinct?: ParagraphScalarFieldEnum | ParagraphScalarFieldEnum[]
  }

  /**
   * Paragraph create
   */
  export type ParagraphCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * The data needed to create a Paragraph.
     */
    data: XOR<ParagraphCreateInput, ParagraphUncheckedCreateInput>
  }

  /**
   * Paragraph createMany
   */
  export type ParagraphCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paragraphs.
     */
    data: ParagraphCreateManyInput | ParagraphCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paragraph createManyAndReturn
   */
  export type ParagraphCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * The data used to create many Paragraphs.
     */
    data: ParagraphCreateManyInput | ParagraphCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paragraph update
   */
  export type ParagraphUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * The data needed to update a Paragraph.
     */
    data: XOR<ParagraphUpdateInput, ParagraphUncheckedUpdateInput>
    /**
     * Choose, which Paragraph to update.
     */
    where: ParagraphWhereUniqueInput
  }

  /**
   * Paragraph updateMany
   */
  export type ParagraphUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paragraphs.
     */
    data: XOR<ParagraphUpdateManyMutationInput, ParagraphUncheckedUpdateManyInput>
    /**
     * Filter which Paragraphs to update
     */
    where?: ParagraphWhereInput
    /**
     * Limit how many Paragraphs to update.
     */
    limit?: number
  }

  /**
   * Paragraph updateManyAndReturn
   */
  export type ParagraphUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * The data used to update Paragraphs.
     */
    data: XOR<ParagraphUpdateManyMutationInput, ParagraphUncheckedUpdateManyInput>
    /**
     * Filter which Paragraphs to update
     */
    where?: ParagraphWhereInput
    /**
     * Limit how many Paragraphs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paragraph upsert
   */
  export type ParagraphUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * The filter to search for the Paragraph to update in case it exists.
     */
    where: ParagraphWhereUniqueInput
    /**
     * In case the Paragraph found by the `where` argument doesn't exist, create a new Paragraph with this data.
     */
    create: XOR<ParagraphCreateInput, ParagraphUncheckedCreateInput>
    /**
     * In case the Paragraph was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParagraphUpdateInput, ParagraphUncheckedUpdateInput>
  }

  /**
   * Paragraph delete
   */
  export type ParagraphDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * Filter which Paragraph to delete.
     */
    where: ParagraphWhereUniqueInput
  }

  /**
   * Paragraph deleteMany
   */
  export type ParagraphDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paragraphs to delete
     */
    where?: ParagraphWhereInput
    /**
     * Limit how many Paragraphs to delete.
     */
    limit?: number
  }

  /**
   * Paragraph.chapter
   */
  export type Paragraph$chapterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
  }

  /**
   * Paragraph without action
   */
  export type ParagraphDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
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


  export const BibleStudyScalarFieldEnum: {
    id: 'id',
    index: 'index',
    imageUrl: 'imageUrl',
    name: 'name',
    slug: 'slug'
  };

  export type BibleStudyScalarFieldEnum = (typeof BibleStudyScalarFieldEnum)[keyof typeof BibleStudyScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    index: 'index',
    title: 'title',
    slug: 'slug',
    bibleStudyId: 'bibleStudyId'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const ParagraphScalarFieldEnum: {
    id: 'id',
    line: 'line',
    number: 'number',
    isTag: 'isTag',
    chapterId: 'chapterId'
  };

  export type ParagraphScalarFieldEnum = (typeof ParagraphScalarFieldEnum)[keyof typeof ParagraphScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BibleStudyWhereInput = {
    AND?: BibleStudyWhereInput | BibleStudyWhereInput[]
    OR?: BibleStudyWhereInput[]
    NOT?: BibleStudyWhereInput | BibleStudyWhereInput[]
    id?: StringFilter<"BibleStudy"> | string
    index?: IntFilter<"BibleStudy"> | number
    imageUrl?: StringNullableFilter<"BibleStudy"> | string | null
    name?: StringFilter<"BibleStudy"> | string
    slug?: StringFilter<"BibleStudy"> | string
    chapters?: ChapterListRelationFilter
  }

  export type BibleStudyOrderByWithRelationInput = {
    id?: SortOrder
    index?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    name?: SortOrder
    slug?: SortOrder
    chapters?: ChapterOrderByRelationAggregateInput
  }

  export type BibleStudyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BibleStudyWhereInput | BibleStudyWhereInput[]
    OR?: BibleStudyWhereInput[]
    NOT?: BibleStudyWhereInput | BibleStudyWhereInput[]
    index?: IntFilter<"BibleStudy"> | number
    imageUrl?: StringNullableFilter<"BibleStudy"> | string | null
    name?: StringFilter<"BibleStudy"> | string
    chapters?: ChapterListRelationFilter
  }, "id" | "slug">

  export type BibleStudyOrderByWithAggregationInput = {
    id?: SortOrder
    index?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    name?: SortOrder
    slug?: SortOrder
    _count?: BibleStudyCountOrderByAggregateInput
    _avg?: BibleStudyAvgOrderByAggregateInput
    _max?: BibleStudyMaxOrderByAggregateInput
    _min?: BibleStudyMinOrderByAggregateInput
    _sum?: BibleStudySumOrderByAggregateInput
  }

  export type BibleStudyScalarWhereWithAggregatesInput = {
    AND?: BibleStudyScalarWhereWithAggregatesInput | BibleStudyScalarWhereWithAggregatesInput[]
    OR?: BibleStudyScalarWhereWithAggregatesInput[]
    NOT?: BibleStudyScalarWhereWithAggregatesInput | BibleStudyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BibleStudy"> | string
    index?: IntWithAggregatesFilter<"BibleStudy"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"BibleStudy"> | string | null
    name?: StringWithAggregatesFilter<"BibleStudy"> | string
    slug?: StringWithAggregatesFilter<"BibleStudy"> | string
  }

  export type ChapterWhereInput = {
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    id?: StringFilter<"Chapter"> | string
    index?: IntFilter<"Chapter"> | number
    title?: StringFilter<"Chapter"> | string
    slug?: StringFilter<"Chapter"> | string
    bibleStudyId?: StringNullableFilter<"Chapter"> | string | null
    paragraphs?: ParagraphListRelationFilter
    bibleStudy?: XOR<BibleStudyNullableScalarRelationFilter, BibleStudyWhereInput> | null
  }

  export type ChapterOrderByWithRelationInput = {
    id?: SortOrder
    index?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    bibleStudyId?: SortOrderInput | SortOrder
    paragraphs?: ParagraphOrderByRelationAggregateInput
    bibleStudy?: BibleStudyOrderByWithRelationInput
  }

  export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    index?: IntFilter<"Chapter"> | number
    title?: StringFilter<"Chapter"> | string
    bibleStudyId?: StringNullableFilter<"Chapter"> | string | null
    paragraphs?: ParagraphListRelationFilter
    bibleStudy?: XOR<BibleStudyNullableScalarRelationFilter, BibleStudyWhereInput> | null
  }, "id" | "slug">

  export type ChapterOrderByWithAggregationInput = {
    id?: SortOrder
    index?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    bibleStudyId?: SortOrderInput | SortOrder
    _count?: ChapterCountOrderByAggregateInput
    _avg?: ChapterAvgOrderByAggregateInput
    _max?: ChapterMaxOrderByAggregateInput
    _min?: ChapterMinOrderByAggregateInput
    _sum?: ChapterSumOrderByAggregateInput
  }

  export type ChapterScalarWhereWithAggregatesInput = {
    AND?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    OR?: ChapterScalarWhereWithAggregatesInput[]
    NOT?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chapter"> | string
    index?: IntWithAggregatesFilter<"Chapter"> | number
    title?: StringWithAggregatesFilter<"Chapter"> | string
    slug?: StringWithAggregatesFilter<"Chapter"> | string
    bibleStudyId?: StringNullableWithAggregatesFilter<"Chapter"> | string | null
  }

  export type ParagraphWhereInput = {
    AND?: ParagraphWhereInput | ParagraphWhereInput[]
    OR?: ParagraphWhereInput[]
    NOT?: ParagraphWhereInput | ParagraphWhereInput[]
    id?: StringFilter<"Paragraph"> | string
    line?: StringFilter<"Paragraph"> | string
    number?: IntFilter<"Paragraph"> | number
    isTag?: BoolFilter<"Paragraph"> | boolean
    chapterId?: StringNullableFilter<"Paragraph"> | string | null
    chapter?: XOR<ChapterNullableScalarRelationFilter, ChapterWhereInput> | null
  }

  export type ParagraphOrderByWithRelationInput = {
    id?: SortOrder
    line?: SortOrder
    number?: SortOrder
    isTag?: SortOrder
    chapterId?: SortOrderInput | SortOrder
    chapter?: ChapterOrderByWithRelationInput
  }

  export type ParagraphWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParagraphWhereInput | ParagraphWhereInput[]
    OR?: ParagraphWhereInput[]
    NOT?: ParagraphWhereInput | ParagraphWhereInput[]
    line?: StringFilter<"Paragraph"> | string
    number?: IntFilter<"Paragraph"> | number
    isTag?: BoolFilter<"Paragraph"> | boolean
    chapterId?: StringNullableFilter<"Paragraph"> | string | null
    chapter?: XOR<ChapterNullableScalarRelationFilter, ChapterWhereInput> | null
  }, "id">

  export type ParagraphOrderByWithAggregationInput = {
    id?: SortOrder
    line?: SortOrder
    number?: SortOrder
    isTag?: SortOrder
    chapterId?: SortOrderInput | SortOrder
    _count?: ParagraphCountOrderByAggregateInput
    _avg?: ParagraphAvgOrderByAggregateInput
    _max?: ParagraphMaxOrderByAggregateInput
    _min?: ParagraphMinOrderByAggregateInput
    _sum?: ParagraphSumOrderByAggregateInput
  }

  export type ParagraphScalarWhereWithAggregatesInput = {
    AND?: ParagraphScalarWhereWithAggregatesInput | ParagraphScalarWhereWithAggregatesInput[]
    OR?: ParagraphScalarWhereWithAggregatesInput[]
    NOT?: ParagraphScalarWhereWithAggregatesInput | ParagraphScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Paragraph"> | string
    line?: StringWithAggregatesFilter<"Paragraph"> | string
    number?: IntWithAggregatesFilter<"Paragraph"> | number
    isTag?: BoolWithAggregatesFilter<"Paragraph"> | boolean
    chapterId?: StringNullableWithAggregatesFilter<"Paragraph"> | string | null
  }

  export type BibleStudyCreateInput = {
    id?: string
    index?: number
    imageUrl?: string | null
    name: string
    slug: string
    chapters?: ChapterCreateNestedManyWithoutBibleStudyInput
  }

  export type BibleStudyUncheckedCreateInput = {
    id?: string
    index?: number
    imageUrl?: string | null
    name: string
    slug: string
    chapters?: ChapterUncheckedCreateNestedManyWithoutBibleStudyInput
  }

  export type BibleStudyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUpdateManyWithoutBibleStudyNestedInput
  }

  export type BibleStudyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUncheckedUpdateManyWithoutBibleStudyNestedInput
  }

  export type BibleStudyCreateManyInput = {
    id?: string
    index?: number
    imageUrl?: string | null
    name: string
    slug: string
  }

  export type BibleStudyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type BibleStudyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterCreateInput = {
    id?: string
    index?: number
    title: string
    slug: string
    paragraphs?: ParagraphCreateNestedManyWithoutChapterInput
    bibleStudy?: BibleStudyCreateNestedOneWithoutChaptersInput
  }

  export type ChapterUncheckedCreateInput = {
    id?: string
    index?: number
    title: string
    slug: string
    bibleStudyId?: string | null
    paragraphs?: ParagraphUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    paragraphs?: ParagraphUpdateManyWithoutChapterNestedInput
    bibleStudy?: BibleStudyUpdateOneWithoutChaptersNestedInput
  }

  export type ChapterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bibleStudyId?: NullableStringFieldUpdateOperationsInput | string | null
    paragraphs?: ParagraphUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterCreateManyInput = {
    id?: string
    index?: number
    title: string
    slug: string
    bibleStudyId?: string | null
  }

  export type ChapterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bibleStudyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParagraphCreateInput = {
    id?: string
    line: string
    number: number
    isTag: boolean
    chapter?: ChapterCreateNestedOneWithoutParagraphsInput
  }

  export type ParagraphUncheckedCreateInput = {
    id?: string
    line: string
    number: number
    isTag: boolean
    chapterId?: string | null
  }

  export type ParagraphUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    isTag?: BoolFieldUpdateOperationsInput | boolean
    chapter?: ChapterUpdateOneWithoutParagraphsNestedInput
  }

  export type ParagraphUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    isTag?: BoolFieldUpdateOperationsInput | boolean
    chapterId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParagraphCreateManyInput = {
    id?: string
    line: string
    number: number
    isTag: boolean
    chapterId?: string | null
  }

  export type ParagraphUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    isTag?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ParagraphUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    isTag?: BoolFieldUpdateOperationsInput | boolean
    chapterId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type ChapterListRelationFilter = {
    every?: ChapterWhereInput
    some?: ChapterWhereInput
    none?: ChapterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BibleStudyCountOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type BibleStudyAvgOrderByAggregateInput = {
    index?: SortOrder
  }

  export type BibleStudyMaxOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type BibleStudyMinOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type BibleStudySumOrderByAggregateInput = {
    index?: SortOrder
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

  export type ParagraphListRelationFilter = {
    every?: ParagraphWhereInput
    some?: ParagraphWhereInput
    none?: ParagraphWhereInput
  }

  export type BibleStudyNullableScalarRelationFilter = {
    is?: BibleStudyWhereInput | null
    isNot?: BibleStudyWhereInput | null
  }

  export type ParagraphOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapterCountOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    bibleStudyId?: SortOrder
  }

  export type ChapterAvgOrderByAggregateInput = {
    index?: SortOrder
  }

  export type ChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    bibleStudyId?: SortOrder
  }

  export type ChapterMinOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    bibleStudyId?: SortOrder
  }

  export type ChapterSumOrderByAggregateInput = {
    index?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChapterNullableScalarRelationFilter = {
    is?: ChapterWhereInput | null
    isNot?: ChapterWhereInput | null
  }

  export type ParagraphCountOrderByAggregateInput = {
    id?: SortOrder
    line?: SortOrder
    number?: SortOrder
    isTag?: SortOrder
    chapterId?: SortOrder
  }

  export type ParagraphAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type ParagraphMaxOrderByAggregateInput = {
    id?: SortOrder
    line?: SortOrder
    number?: SortOrder
    isTag?: SortOrder
    chapterId?: SortOrder
  }

  export type ParagraphMinOrderByAggregateInput = {
    id?: SortOrder
    line?: SortOrder
    number?: SortOrder
    isTag?: SortOrder
    chapterId?: SortOrder
  }

  export type ParagraphSumOrderByAggregateInput = {
    number?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChapterCreateNestedManyWithoutBibleStudyInput = {
    create?: XOR<ChapterCreateWithoutBibleStudyInput, ChapterUncheckedCreateWithoutBibleStudyInput> | ChapterCreateWithoutBibleStudyInput[] | ChapterUncheckedCreateWithoutBibleStudyInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutBibleStudyInput | ChapterCreateOrConnectWithoutBibleStudyInput[]
    createMany?: ChapterCreateManyBibleStudyInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type ChapterUncheckedCreateNestedManyWithoutBibleStudyInput = {
    create?: XOR<ChapterCreateWithoutBibleStudyInput, ChapterUncheckedCreateWithoutBibleStudyInput> | ChapterCreateWithoutBibleStudyInput[] | ChapterUncheckedCreateWithoutBibleStudyInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutBibleStudyInput | ChapterCreateOrConnectWithoutBibleStudyInput[]
    createMany?: ChapterCreateManyBibleStudyInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ChapterUpdateManyWithoutBibleStudyNestedInput = {
    create?: XOR<ChapterCreateWithoutBibleStudyInput, ChapterUncheckedCreateWithoutBibleStudyInput> | ChapterCreateWithoutBibleStudyInput[] | ChapterUncheckedCreateWithoutBibleStudyInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutBibleStudyInput | ChapterCreateOrConnectWithoutBibleStudyInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutBibleStudyInput | ChapterUpsertWithWhereUniqueWithoutBibleStudyInput[]
    createMany?: ChapterCreateManyBibleStudyInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutBibleStudyInput | ChapterUpdateWithWhereUniqueWithoutBibleStudyInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutBibleStudyInput | ChapterUpdateManyWithWhereWithoutBibleStudyInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type ChapterUncheckedUpdateManyWithoutBibleStudyNestedInput = {
    create?: XOR<ChapterCreateWithoutBibleStudyInput, ChapterUncheckedCreateWithoutBibleStudyInput> | ChapterCreateWithoutBibleStudyInput[] | ChapterUncheckedCreateWithoutBibleStudyInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutBibleStudyInput | ChapterCreateOrConnectWithoutBibleStudyInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutBibleStudyInput | ChapterUpsertWithWhereUniqueWithoutBibleStudyInput[]
    createMany?: ChapterCreateManyBibleStudyInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutBibleStudyInput | ChapterUpdateWithWhereUniqueWithoutBibleStudyInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutBibleStudyInput | ChapterUpdateManyWithWhereWithoutBibleStudyInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type ParagraphCreateNestedManyWithoutChapterInput = {
    create?: XOR<ParagraphCreateWithoutChapterInput, ParagraphUncheckedCreateWithoutChapterInput> | ParagraphCreateWithoutChapterInput[] | ParagraphUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ParagraphCreateOrConnectWithoutChapterInput | ParagraphCreateOrConnectWithoutChapterInput[]
    createMany?: ParagraphCreateManyChapterInputEnvelope
    connect?: ParagraphWhereUniqueInput | ParagraphWhereUniqueInput[]
  }

  export type BibleStudyCreateNestedOneWithoutChaptersInput = {
    create?: XOR<BibleStudyCreateWithoutChaptersInput, BibleStudyUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: BibleStudyCreateOrConnectWithoutChaptersInput
    connect?: BibleStudyWhereUniqueInput
  }

  export type ParagraphUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<ParagraphCreateWithoutChapterInput, ParagraphUncheckedCreateWithoutChapterInput> | ParagraphCreateWithoutChapterInput[] | ParagraphUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ParagraphCreateOrConnectWithoutChapterInput | ParagraphCreateOrConnectWithoutChapterInput[]
    createMany?: ParagraphCreateManyChapterInputEnvelope
    connect?: ParagraphWhereUniqueInput | ParagraphWhereUniqueInput[]
  }

  export type ParagraphUpdateManyWithoutChapterNestedInput = {
    create?: XOR<ParagraphCreateWithoutChapterInput, ParagraphUncheckedCreateWithoutChapterInput> | ParagraphCreateWithoutChapterInput[] | ParagraphUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ParagraphCreateOrConnectWithoutChapterInput | ParagraphCreateOrConnectWithoutChapterInput[]
    upsert?: ParagraphUpsertWithWhereUniqueWithoutChapterInput | ParagraphUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: ParagraphCreateManyChapterInputEnvelope
    set?: ParagraphWhereUniqueInput | ParagraphWhereUniqueInput[]
    disconnect?: ParagraphWhereUniqueInput | ParagraphWhereUniqueInput[]
    delete?: ParagraphWhereUniqueInput | ParagraphWhereUniqueInput[]
    connect?: ParagraphWhereUniqueInput | ParagraphWhereUniqueInput[]
    update?: ParagraphUpdateWithWhereUniqueWithoutChapterInput | ParagraphUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: ParagraphUpdateManyWithWhereWithoutChapterInput | ParagraphUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: ParagraphScalarWhereInput | ParagraphScalarWhereInput[]
  }

  export type BibleStudyUpdateOneWithoutChaptersNestedInput = {
    create?: XOR<BibleStudyCreateWithoutChaptersInput, BibleStudyUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: BibleStudyCreateOrConnectWithoutChaptersInput
    upsert?: BibleStudyUpsertWithoutChaptersInput
    disconnect?: BibleStudyWhereInput | boolean
    delete?: BibleStudyWhereInput | boolean
    connect?: BibleStudyWhereUniqueInput
    update?: XOR<XOR<BibleStudyUpdateToOneWithWhereWithoutChaptersInput, BibleStudyUpdateWithoutChaptersInput>, BibleStudyUncheckedUpdateWithoutChaptersInput>
  }

  export type ParagraphUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<ParagraphCreateWithoutChapterInput, ParagraphUncheckedCreateWithoutChapterInput> | ParagraphCreateWithoutChapterInput[] | ParagraphUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ParagraphCreateOrConnectWithoutChapterInput | ParagraphCreateOrConnectWithoutChapterInput[]
    upsert?: ParagraphUpsertWithWhereUniqueWithoutChapterInput | ParagraphUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: ParagraphCreateManyChapterInputEnvelope
    set?: ParagraphWhereUniqueInput | ParagraphWhereUniqueInput[]
    disconnect?: ParagraphWhereUniqueInput | ParagraphWhereUniqueInput[]
    delete?: ParagraphWhereUniqueInput | ParagraphWhereUniqueInput[]
    connect?: ParagraphWhereUniqueInput | ParagraphWhereUniqueInput[]
    update?: ParagraphUpdateWithWhereUniqueWithoutChapterInput | ParagraphUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: ParagraphUpdateManyWithWhereWithoutChapterInput | ParagraphUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: ParagraphScalarWhereInput | ParagraphScalarWhereInput[]
  }

  export type ChapterCreateNestedOneWithoutParagraphsInput = {
    create?: XOR<ChapterCreateWithoutParagraphsInput, ChapterUncheckedCreateWithoutParagraphsInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutParagraphsInput
    connect?: ChapterWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChapterUpdateOneWithoutParagraphsNestedInput = {
    create?: XOR<ChapterCreateWithoutParagraphsInput, ChapterUncheckedCreateWithoutParagraphsInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutParagraphsInput
    upsert?: ChapterUpsertWithoutParagraphsInput
    disconnect?: ChapterWhereInput | boolean
    delete?: ChapterWhereInput | boolean
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutParagraphsInput, ChapterUpdateWithoutParagraphsInput>, ChapterUncheckedUpdateWithoutParagraphsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChapterCreateWithoutBibleStudyInput = {
    id?: string
    index?: number
    title: string
    slug: string
    paragraphs?: ParagraphCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutBibleStudyInput = {
    id?: string
    index?: number
    title: string
    slug: string
    paragraphs?: ParagraphUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutBibleStudyInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutBibleStudyInput, ChapterUncheckedCreateWithoutBibleStudyInput>
  }

  export type ChapterCreateManyBibleStudyInputEnvelope = {
    data: ChapterCreateManyBibleStudyInput | ChapterCreateManyBibleStudyInput[]
    skipDuplicates?: boolean
  }

  export type ChapterUpsertWithWhereUniqueWithoutBibleStudyInput = {
    where: ChapterWhereUniqueInput
    update: XOR<ChapterUpdateWithoutBibleStudyInput, ChapterUncheckedUpdateWithoutBibleStudyInput>
    create: XOR<ChapterCreateWithoutBibleStudyInput, ChapterUncheckedCreateWithoutBibleStudyInput>
  }

  export type ChapterUpdateWithWhereUniqueWithoutBibleStudyInput = {
    where: ChapterWhereUniqueInput
    data: XOR<ChapterUpdateWithoutBibleStudyInput, ChapterUncheckedUpdateWithoutBibleStudyInput>
  }

  export type ChapterUpdateManyWithWhereWithoutBibleStudyInput = {
    where: ChapterScalarWhereInput
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyWithoutBibleStudyInput>
  }

  export type ChapterScalarWhereInput = {
    AND?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    OR?: ChapterScalarWhereInput[]
    NOT?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    id?: StringFilter<"Chapter"> | string
    index?: IntFilter<"Chapter"> | number
    title?: StringFilter<"Chapter"> | string
    slug?: StringFilter<"Chapter"> | string
    bibleStudyId?: StringNullableFilter<"Chapter"> | string | null
  }

  export type ParagraphCreateWithoutChapterInput = {
    id?: string
    line: string
    number: number
    isTag: boolean
  }

  export type ParagraphUncheckedCreateWithoutChapterInput = {
    id?: string
    line: string
    number: number
    isTag: boolean
  }

  export type ParagraphCreateOrConnectWithoutChapterInput = {
    where: ParagraphWhereUniqueInput
    create: XOR<ParagraphCreateWithoutChapterInput, ParagraphUncheckedCreateWithoutChapterInput>
  }

  export type ParagraphCreateManyChapterInputEnvelope = {
    data: ParagraphCreateManyChapterInput | ParagraphCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type BibleStudyCreateWithoutChaptersInput = {
    id?: string
    index?: number
    imageUrl?: string | null
    name: string
    slug: string
  }

  export type BibleStudyUncheckedCreateWithoutChaptersInput = {
    id?: string
    index?: number
    imageUrl?: string | null
    name: string
    slug: string
  }

  export type BibleStudyCreateOrConnectWithoutChaptersInput = {
    where: BibleStudyWhereUniqueInput
    create: XOR<BibleStudyCreateWithoutChaptersInput, BibleStudyUncheckedCreateWithoutChaptersInput>
  }

  export type ParagraphUpsertWithWhereUniqueWithoutChapterInput = {
    where: ParagraphWhereUniqueInput
    update: XOR<ParagraphUpdateWithoutChapterInput, ParagraphUncheckedUpdateWithoutChapterInput>
    create: XOR<ParagraphCreateWithoutChapterInput, ParagraphUncheckedCreateWithoutChapterInput>
  }

  export type ParagraphUpdateWithWhereUniqueWithoutChapterInput = {
    where: ParagraphWhereUniqueInput
    data: XOR<ParagraphUpdateWithoutChapterInput, ParagraphUncheckedUpdateWithoutChapterInput>
  }

  export type ParagraphUpdateManyWithWhereWithoutChapterInput = {
    where: ParagraphScalarWhereInput
    data: XOR<ParagraphUpdateManyMutationInput, ParagraphUncheckedUpdateManyWithoutChapterInput>
  }

  export type ParagraphScalarWhereInput = {
    AND?: ParagraphScalarWhereInput | ParagraphScalarWhereInput[]
    OR?: ParagraphScalarWhereInput[]
    NOT?: ParagraphScalarWhereInput | ParagraphScalarWhereInput[]
    id?: StringFilter<"Paragraph"> | string
    line?: StringFilter<"Paragraph"> | string
    number?: IntFilter<"Paragraph"> | number
    isTag?: BoolFilter<"Paragraph"> | boolean
    chapterId?: StringNullableFilter<"Paragraph"> | string | null
  }

  export type BibleStudyUpsertWithoutChaptersInput = {
    update: XOR<BibleStudyUpdateWithoutChaptersInput, BibleStudyUncheckedUpdateWithoutChaptersInput>
    create: XOR<BibleStudyCreateWithoutChaptersInput, BibleStudyUncheckedCreateWithoutChaptersInput>
    where?: BibleStudyWhereInput
  }

  export type BibleStudyUpdateToOneWithWhereWithoutChaptersInput = {
    where?: BibleStudyWhereInput
    data: XOR<BibleStudyUpdateWithoutChaptersInput, BibleStudyUncheckedUpdateWithoutChaptersInput>
  }

  export type BibleStudyUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type BibleStudyUncheckedUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterCreateWithoutParagraphsInput = {
    id?: string
    index?: number
    title: string
    slug: string
    bibleStudy?: BibleStudyCreateNestedOneWithoutChaptersInput
  }

  export type ChapterUncheckedCreateWithoutParagraphsInput = {
    id?: string
    index?: number
    title: string
    slug: string
    bibleStudyId?: string | null
  }

  export type ChapterCreateOrConnectWithoutParagraphsInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutParagraphsInput, ChapterUncheckedCreateWithoutParagraphsInput>
  }

  export type ChapterUpsertWithoutParagraphsInput = {
    update: XOR<ChapterUpdateWithoutParagraphsInput, ChapterUncheckedUpdateWithoutParagraphsInput>
    create: XOR<ChapterCreateWithoutParagraphsInput, ChapterUncheckedCreateWithoutParagraphsInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutParagraphsInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutParagraphsInput, ChapterUncheckedUpdateWithoutParagraphsInput>
  }

  export type ChapterUpdateWithoutParagraphsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bibleStudy?: BibleStudyUpdateOneWithoutChaptersNestedInput
  }

  export type ChapterUncheckedUpdateWithoutParagraphsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bibleStudyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChapterCreateManyBibleStudyInput = {
    id?: string
    index?: number
    title: string
    slug: string
  }

  export type ChapterUpdateWithoutBibleStudyInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    paragraphs?: ParagraphUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutBibleStudyInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    paragraphs?: ParagraphUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateManyWithoutBibleStudyInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ParagraphCreateManyChapterInput = {
    id?: string
    line: string
    number: number
    isTag: boolean
  }

  export type ParagraphUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    isTag?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ParagraphUncheckedUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    isTag?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ParagraphUncheckedUpdateManyWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    isTag?: BoolFieldUpdateOperationsInput | boolean
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
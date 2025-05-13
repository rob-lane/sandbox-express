
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
 * Model Commodity
 * 
 */
export type Commodity = $Result.DefaultSelection<Prisma.$CommodityPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Commodities
 * const commodities = await prisma.commodity.findMany()
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
   * // Fetch zero or more Commodities
   * const commodities = await prisma.commodity.findMany()
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
   * `prisma.commodity`: Exposes CRUD operations for the **Commodity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commodities
    * const commodities = await prisma.commodity.findMany()
    * ```
    */
  get commodity(): Prisma.CommodityDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Commodity: 'Commodity'
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
      modelProps: "commodity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Commodity: {
        payload: Prisma.$CommodityPayload<ExtArgs>
        fields: Prisma.CommodityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommodityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommodityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>
          }
          findFirst: {
            args: Prisma.CommodityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommodityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>
          }
          findMany: {
            args: Prisma.CommodityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>[]
          }
          create: {
            args: Prisma.CommodityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>
          }
          createMany: {
            args: Prisma.CommodityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommodityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>[]
          }
          delete: {
            args: Prisma.CommodityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>
          }
          update: {
            args: Prisma.CommodityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>
          }
          deleteMany: {
            args: Prisma.CommodityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommodityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommodityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>[]
          }
          upsert: {
            args: Prisma.CommodityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>
          }
          aggregate: {
            args: Prisma.CommodityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommodity>
          }
          groupBy: {
            args: Prisma.CommodityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommodityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommodityCountArgs<ExtArgs>
            result: $Utils.Optional<CommodityCountAggregateOutputType> | number
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
    commodity?: CommodityOmit
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
   * Models
   */

  /**
   * Model Commodity
   */

  export type AggregateCommodity = {
    _count: CommodityCountAggregateOutputType | null
    _avg: CommodityAvgAggregateOutputType | null
    _sum: CommoditySumAggregateOutputType | null
    _min: CommodityMinAggregateOutputType | null
    _max: CommodityMaxAggregateOutputType | null
  }

  export type CommodityAvgAggregateOutputType = {
    id: number | null
    year: number | null
    value: number | null
  }

  export type CommoditySumAggregateOutputType = {
    id: number | null
    year: number | null
    value: number | null
  }

  export type CommodityMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    attribute: string | null
    name: string | null
    type: string | null
    yearType: string | null
    year: number | null
    value: number | null
  }

  export type CommodityMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    attribute: string | null
    name: string | null
    type: string | null
    yearType: string | null
    year: number | null
    value: number | null
  }

  export type CommodityCountAggregateOutputType = {
    id: number
    createdAt: number
    attribute: number
    name: number
    type: number
    yearType: number
    year: number
    value: number
    _all: number
  }


  export type CommodityAvgAggregateInputType = {
    id?: true
    year?: true
    value?: true
  }

  export type CommoditySumAggregateInputType = {
    id?: true
    year?: true
    value?: true
  }

  export type CommodityMinAggregateInputType = {
    id?: true
    createdAt?: true
    attribute?: true
    name?: true
    type?: true
    yearType?: true
    year?: true
    value?: true
  }

  export type CommodityMaxAggregateInputType = {
    id?: true
    createdAt?: true
    attribute?: true
    name?: true
    type?: true
    yearType?: true
    year?: true
    value?: true
  }

  export type CommodityCountAggregateInputType = {
    id?: true
    createdAt?: true
    attribute?: true
    name?: true
    type?: true
    yearType?: true
    year?: true
    value?: true
    _all?: true
  }

  export type CommodityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commodity to aggregate.
     */
    where?: CommodityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commodities to fetch.
     */
    orderBy?: CommodityOrderByWithRelationInput | CommodityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommodityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commodities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commodities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commodities
    **/
    _count?: true | CommodityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommodityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommoditySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommodityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommodityMaxAggregateInputType
  }

  export type GetCommodityAggregateType<T extends CommodityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommodity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommodity[P]>
      : GetScalarType<T[P], AggregateCommodity[P]>
  }




  export type CommodityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommodityWhereInput
    orderBy?: CommodityOrderByWithAggregationInput | CommodityOrderByWithAggregationInput[]
    by: CommodityScalarFieldEnum[] | CommodityScalarFieldEnum
    having?: CommodityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommodityCountAggregateInputType | true
    _avg?: CommodityAvgAggregateInputType
    _sum?: CommoditySumAggregateInputType
    _min?: CommodityMinAggregateInputType
    _max?: CommodityMaxAggregateInputType
  }

  export type CommodityGroupByOutputType = {
    id: number
    createdAt: Date
    attribute: string
    name: string
    type: string
    yearType: string
    year: number
    value: number
    _count: CommodityCountAggregateOutputType | null
    _avg: CommodityAvgAggregateOutputType | null
    _sum: CommoditySumAggregateOutputType | null
    _min: CommodityMinAggregateOutputType | null
    _max: CommodityMaxAggregateOutputType | null
  }

  type GetCommodityGroupByPayload<T extends CommodityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommodityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommodityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommodityGroupByOutputType[P]>
            : GetScalarType<T[P], CommodityGroupByOutputType[P]>
        }
      >
    >


  export type CommoditySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    attribute?: boolean
    name?: boolean
    type?: boolean
    yearType?: boolean
    year?: boolean
    value?: boolean
  }, ExtArgs["result"]["commodity"]>

  export type CommoditySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    attribute?: boolean
    name?: boolean
    type?: boolean
    yearType?: boolean
    year?: boolean
    value?: boolean
  }, ExtArgs["result"]["commodity"]>

  export type CommoditySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    attribute?: boolean
    name?: boolean
    type?: boolean
    yearType?: boolean
    year?: boolean
    value?: boolean
  }, ExtArgs["result"]["commodity"]>

  export type CommoditySelectScalar = {
    id?: boolean
    createdAt?: boolean
    attribute?: boolean
    name?: boolean
    type?: boolean
    yearType?: boolean
    year?: boolean
    value?: boolean
  }

  export type CommodityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "attribute" | "name" | "type" | "yearType" | "year" | "value", ExtArgs["result"]["commodity"]>

  export type $CommodityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commodity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      attribute: string
      name: string
      type: string
      yearType: string
      year: number
      value: number
    }, ExtArgs["result"]["commodity"]>
    composites: {}
  }

  type CommodityGetPayload<S extends boolean | null | undefined | CommodityDefaultArgs> = $Result.GetResult<Prisma.$CommodityPayload, S>

  type CommodityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommodityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommodityCountAggregateInputType | true
    }

  export interface CommodityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commodity'], meta: { name: 'Commodity' } }
    /**
     * Find zero or one Commodity that matches the filter.
     * @param {CommodityFindUniqueArgs} args - Arguments to find a Commodity
     * @example
     * // Get one Commodity
     * const commodity = await prisma.commodity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommodityFindUniqueArgs>(args: SelectSubset<T, CommodityFindUniqueArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commodity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommodityFindUniqueOrThrowArgs} args - Arguments to find a Commodity
     * @example
     * // Get one Commodity
     * const commodity = await prisma.commodity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommodityFindUniqueOrThrowArgs>(args: SelectSubset<T, CommodityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commodity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommodityFindFirstArgs} args - Arguments to find a Commodity
     * @example
     * // Get one Commodity
     * const commodity = await prisma.commodity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommodityFindFirstArgs>(args?: SelectSubset<T, CommodityFindFirstArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commodity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommodityFindFirstOrThrowArgs} args - Arguments to find a Commodity
     * @example
     * // Get one Commodity
     * const commodity = await prisma.commodity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommodityFindFirstOrThrowArgs>(args?: SelectSubset<T, CommodityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commodities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommodityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commodities
     * const commodities = await prisma.commodity.findMany()
     * 
     * // Get first 10 Commodities
     * const commodities = await prisma.commodity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commodityWithIdOnly = await prisma.commodity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommodityFindManyArgs>(args?: SelectSubset<T, CommodityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commodity.
     * @param {CommodityCreateArgs} args - Arguments to create a Commodity.
     * @example
     * // Create one Commodity
     * const Commodity = await prisma.commodity.create({
     *   data: {
     *     // ... data to create a Commodity
     *   }
     * })
     * 
     */
    create<T extends CommodityCreateArgs>(args: SelectSubset<T, CommodityCreateArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commodities.
     * @param {CommodityCreateManyArgs} args - Arguments to create many Commodities.
     * @example
     * // Create many Commodities
     * const commodity = await prisma.commodity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommodityCreateManyArgs>(args?: SelectSubset<T, CommodityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commodities and returns the data saved in the database.
     * @param {CommodityCreateManyAndReturnArgs} args - Arguments to create many Commodities.
     * @example
     * // Create many Commodities
     * const commodity = await prisma.commodity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commodities and only return the `id`
     * const commodityWithIdOnly = await prisma.commodity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommodityCreateManyAndReturnArgs>(args?: SelectSubset<T, CommodityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commodity.
     * @param {CommodityDeleteArgs} args - Arguments to delete one Commodity.
     * @example
     * // Delete one Commodity
     * const Commodity = await prisma.commodity.delete({
     *   where: {
     *     // ... filter to delete one Commodity
     *   }
     * })
     * 
     */
    delete<T extends CommodityDeleteArgs>(args: SelectSubset<T, CommodityDeleteArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commodity.
     * @param {CommodityUpdateArgs} args - Arguments to update one Commodity.
     * @example
     * // Update one Commodity
     * const commodity = await prisma.commodity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommodityUpdateArgs>(args: SelectSubset<T, CommodityUpdateArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commodities.
     * @param {CommodityDeleteManyArgs} args - Arguments to filter Commodities to delete.
     * @example
     * // Delete a few Commodities
     * const { count } = await prisma.commodity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommodityDeleteManyArgs>(args?: SelectSubset<T, CommodityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commodities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommodityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commodities
     * const commodity = await prisma.commodity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommodityUpdateManyArgs>(args: SelectSubset<T, CommodityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commodities and returns the data updated in the database.
     * @param {CommodityUpdateManyAndReturnArgs} args - Arguments to update many Commodities.
     * @example
     * // Update many Commodities
     * const commodity = await prisma.commodity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commodities and only return the `id`
     * const commodityWithIdOnly = await prisma.commodity.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommodityUpdateManyAndReturnArgs>(args: SelectSubset<T, CommodityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commodity.
     * @param {CommodityUpsertArgs} args - Arguments to update or create a Commodity.
     * @example
     * // Update or create a Commodity
     * const commodity = await prisma.commodity.upsert({
     *   create: {
     *     // ... data to create a Commodity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commodity we want to update
     *   }
     * })
     */
    upsert<T extends CommodityUpsertArgs>(args: SelectSubset<T, CommodityUpsertArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commodities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommodityCountArgs} args - Arguments to filter Commodities to count.
     * @example
     * // Count the number of Commodities
     * const count = await prisma.commodity.count({
     *   where: {
     *     // ... the filter for the Commodities we want to count
     *   }
     * })
    **/
    count<T extends CommodityCountArgs>(
      args?: Subset<T, CommodityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommodityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commodity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommodityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommodityAggregateArgs>(args: Subset<T, CommodityAggregateArgs>): Prisma.PrismaPromise<GetCommodityAggregateType<T>>

    /**
     * Group by Commodity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommodityGroupByArgs} args - Group by arguments.
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
      T extends CommodityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommodityGroupByArgs['orderBy'] }
        : { orderBy?: CommodityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommodityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommodityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commodity model
   */
  readonly fields: CommodityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commodity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommodityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Commodity model
   */
  interface CommodityFieldRefs {
    readonly id: FieldRef<"Commodity", 'Int'>
    readonly createdAt: FieldRef<"Commodity", 'DateTime'>
    readonly attribute: FieldRef<"Commodity", 'String'>
    readonly name: FieldRef<"Commodity", 'String'>
    readonly type: FieldRef<"Commodity", 'String'>
    readonly yearType: FieldRef<"Commodity", 'String'>
    readonly year: FieldRef<"Commodity", 'Int'>
    readonly value: FieldRef<"Commodity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Commodity findUnique
   */
  export type CommodityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Filter, which Commodity to fetch.
     */
    where: CommodityWhereUniqueInput
  }

  /**
   * Commodity findUniqueOrThrow
   */
  export type CommodityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Filter, which Commodity to fetch.
     */
    where: CommodityWhereUniqueInput
  }

  /**
   * Commodity findFirst
   */
  export type CommodityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Filter, which Commodity to fetch.
     */
    where?: CommodityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commodities to fetch.
     */
    orderBy?: CommodityOrderByWithRelationInput | CommodityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commodities.
     */
    cursor?: CommodityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commodities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commodities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commodities.
     */
    distinct?: CommodityScalarFieldEnum | CommodityScalarFieldEnum[]
  }

  /**
   * Commodity findFirstOrThrow
   */
  export type CommodityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Filter, which Commodity to fetch.
     */
    where?: CommodityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commodities to fetch.
     */
    orderBy?: CommodityOrderByWithRelationInput | CommodityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commodities.
     */
    cursor?: CommodityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commodities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commodities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commodities.
     */
    distinct?: CommodityScalarFieldEnum | CommodityScalarFieldEnum[]
  }

  /**
   * Commodity findMany
   */
  export type CommodityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Filter, which Commodities to fetch.
     */
    where?: CommodityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commodities to fetch.
     */
    orderBy?: CommodityOrderByWithRelationInput | CommodityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commodities.
     */
    cursor?: CommodityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commodities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commodities.
     */
    skip?: number
    distinct?: CommodityScalarFieldEnum | CommodityScalarFieldEnum[]
  }

  /**
   * Commodity create
   */
  export type CommodityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * The data needed to create a Commodity.
     */
    data: XOR<CommodityCreateInput, CommodityUncheckedCreateInput>
  }

  /**
   * Commodity createMany
   */
  export type CommodityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commodities.
     */
    data: CommodityCreateManyInput | CommodityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commodity createManyAndReturn
   */
  export type CommodityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * The data used to create many Commodities.
     */
    data: CommodityCreateManyInput | CommodityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commodity update
   */
  export type CommodityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * The data needed to update a Commodity.
     */
    data: XOR<CommodityUpdateInput, CommodityUncheckedUpdateInput>
    /**
     * Choose, which Commodity to update.
     */
    where: CommodityWhereUniqueInput
  }

  /**
   * Commodity updateMany
   */
  export type CommodityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commodities.
     */
    data: XOR<CommodityUpdateManyMutationInput, CommodityUncheckedUpdateManyInput>
    /**
     * Filter which Commodities to update
     */
    where?: CommodityWhereInput
    /**
     * Limit how many Commodities to update.
     */
    limit?: number
  }

  /**
   * Commodity updateManyAndReturn
   */
  export type CommodityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * The data used to update Commodities.
     */
    data: XOR<CommodityUpdateManyMutationInput, CommodityUncheckedUpdateManyInput>
    /**
     * Filter which Commodities to update
     */
    where?: CommodityWhereInput
    /**
     * Limit how many Commodities to update.
     */
    limit?: number
  }

  /**
   * Commodity upsert
   */
  export type CommodityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * The filter to search for the Commodity to update in case it exists.
     */
    where: CommodityWhereUniqueInput
    /**
     * In case the Commodity found by the `where` argument doesn't exist, create a new Commodity with this data.
     */
    create: XOR<CommodityCreateInput, CommodityUncheckedCreateInput>
    /**
     * In case the Commodity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommodityUpdateInput, CommodityUncheckedUpdateInput>
  }

  /**
   * Commodity delete
   */
  export type CommodityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Filter which Commodity to delete.
     */
    where: CommodityWhereUniqueInput
  }

  /**
   * Commodity deleteMany
   */
  export type CommodityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commodities to delete
     */
    where?: CommodityWhereInput
    /**
     * Limit how many Commodities to delete.
     */
    limit?: number
  }

  /**
   * Commodity without action
   */
  export type CommodityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
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


  export const CommodityScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    attribute: 'attribute',
    name: 'name',
    type: 'type',
    yearType: 'yearType',
    year: 'year',
    value: 'value'
  };

  export type CommodityScalarFieldEnum = (typeof CommodityScalarFieldEnum)[keyof typeof CommodityScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type CommodityWhereInput = {
    AND?: CommodityWhereInput | CommodityWhereInput[]
    OR?: CommodityWhereInput[]
    NOT?: CommodityWhereInput | CommodityWhereInput[]
    id?: IntFilter<"Commodity"> | number
    createdAt?: DateTimeFilter<"Commodity"> | Date | string
    attribute?: StringFilter<"Commodity"> | string
    name?: StringFilter<"Commodity"> | string
    type?: StringFilter<"Commodity"> | string
    yearType?: StringFilter<"Commodity"> | string
    year?: IntFilter<"Commodity"> | number
    value?: IntFilter<"Commodity"> | number
  }

  export type CommodityOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    attribute?: SortOrder
    name?: SortOrder
    type?: SortOrder
    yearType?: SortOrder
    year?: SortOrder
    value?: SortOrder
  }

  export type CommodityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommodityWhereInput | CommodityWhereInput[]
    OR?: CommodityWhereInput[]
    NOT?: CommodityWhereInput | CommodityWhereInput[]
    createdAt?: DateTimeFilter<"Commodity"> | Date | string
    attribute?: StringFilter<"Commodity"> | string
    name?: StringFilter<"Commodity"> | string
    type?: StringFilter<"Commodity"> | string
    yearType?: StringFilter<"Commodity"> | string
    year?: IntFilter<"Commodity"> | number
    value?: IntFilter<"Commodity"> | number
  }, "id">

  export type CommodityOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    attribute?: SortOrder
    name?: SortOrder
    type?: SortOrder
    yearType?: SortOrder
    year?: SortOrder
    value?: SortOrder
    _count?: CommodityCountOrderByAggregateInput
    _avg?: CommodityAvgOrderByAggregateInput
    _max?: CommodityMaxOrderByAggregateInput
    _min?: CommodityMinOrderByAggregateInput
    _sum?: CommoditySumOrderByAggregateInput
  }

  export type CommodityScalarWhereWithAggregatesInput = {
    AND?: CommodityScalarWhereWithAggregatesInput | CommodityScalarWhereWithAggregatesInput[]
    OR?: CommodityScalarWhereWithAggregatesInput[]
    NOT?: CommodityScalarWhereWithAggregatesInput | CommodityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Commodity"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Commodity"> | Date | string
    attribute?: StringWithAggregatesFilter<"Commodity"> | string
    name?: StringWithAggregatesFilter<"Commodity"> | string
    type?: StringWithAggregatesFilter<"Commodity"> | string
    yearType?: StringWithAggregatesFilter<"Commodity"> | string
    year?: IntWithAggregatesFilter<"Commodity"> | number
    value?: IntWithAggregatesFilter<"Commodity"> | number
  }

  export type CommodityCreateInput = {
    createdAt?: Date | string
    attribute: string
    name: string
    type: string
    yearType: string
    year: number
    value: number
  }

  export type CommodityUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    attribute: string
    name: string
    type: string
    yearType: string
    year: number
    value: number
  }

  export type CommodityUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attribute?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    yearType?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
  }

  export type CommodityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attribute?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    yearType?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
  }

  export type CommodityCreateManyInput = {
    id?: number
    createdAt?: Date | string
    attribute: string
    name: string
    type: string
    yearType: string
    year: number
    value: number
  }

  export type CommodityUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attribute?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    yearType?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
  }

  export type CommodityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attribute?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    yearType?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
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

  export type CommodityCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    attribute?: SortOrder
    name?: SortOrder
    type?: SortOrder
    yearType?: SortOrder
    year?: SortOrder
    value?: SortOrder
  }

  export type CommodityAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    value?: SortOrder
  }

  export type CommodityMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    attribute?: SortOrder
    name?: SortOrder
    type?: SortOrder
    yearType?: SortOrder
    year?: SortOrder
    value?: SortOrder
  }

  export type CommodityMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    attribute?: SortOrder
    name?: SortOrder
    type?: SortOrder
    yearType?: SortOrder
    year?: SortOrder
    value?: SortOrder
  }

  export type CommoditySumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    value?: SortOrder
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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
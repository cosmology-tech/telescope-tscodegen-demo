import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _255 from "./wasm/v1/tx.amino";
import * as _256 from "./wasm/v1/tx.registry";
import * as _257 from "./wasm/v1/query.rpc.Query";
import * as _258 from "./wasm/v1/tx.rpc.msg";
import * as _314 from "./rpc.query";
import * as _315 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._255,
      ..._256,
      ..._257,
      ..._258
    };
  }
  export const ClientFactory = { ..._314,
    ..._315
  };
}
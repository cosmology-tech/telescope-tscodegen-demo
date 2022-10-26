import * as _132 from "./mint/genesis";
import * as _133 from "./mint/mint";
import * as _134 from "./mint/query";
import * as _276 from "./mint/query.rpc.Query";
import * as _318 from "./rpc.query";
export namespace juno {
  export const mint = { ..._132,
    ..._133,
    ..._134,
    ..._276
  };
  export const ClientFactory = { ..._318
  };
}
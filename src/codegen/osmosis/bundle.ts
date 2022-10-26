import * as _135 from "./epochs/genesis";
import * as _136 from "./epochs/query";
import * as _137 from "./gamm/pool-models/balancer/balancerPool";
import * as _138 from "./gamm/v1beta1/genesis";
import * as _139 from "./gamm/v1beta1/query";
import * as _140 from "./gamm/v1beta1/tx";
import * as _141 from "./gamm/pool-models/balancer/tx/tx";
import * as _142 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _143 from "./gamm/pool-models/stableswap/tx";
import * as _144 from "./incentives/gauge";
import * as _145 from "./incentives/genesis";
import * as _146 from "./incentives/params";
import * as _147 from "./incentives/query";
import * as _148 from "./incentives/tx";
import * as _149 from "./lockup/genesis";
import * as _150 from "./lockup/lock";
import * as _151 from "./lockup/query";
import * as _152 from "./lockup/tx";
import * as _153 from "./mint/v1beta1/genesis";
import * as _154 from "./mint/v1beta1/mint";
import * as _155 from "./mint/v1beta1/query";
import * as _156 from "./pool-incentives/v1beta1/genesis";
import * as _157 from "./pool-incentives/v1beta1/gov";
import * as _158 from "./pool-incentives/v1beta1/incentives";
import * as _159 from "./pool-incentives/v1beta1/query";
import * as _160 from "./store/v1beta1/tree";
import * as _161 from "./streamswap/v1/event";
import * as _162 from "./streamswap/v1/genesis";
import * as _163 from "./streamswap/v1/params";
import * as _164 from "./streamswap/v1/query";
import * as _165 from "./streamswap/v1/state";
import * as _166 from "./streamswap/v1/tx";
import * as _167 from "./superfluid/genesis";
import * as _168 from "./superfluid/params";
import * as _169 from "./superfluid/query";
import * as _170 from "./superfluid/superfluid";
import * as _171 from "./superfluid/tx";
import * as _172 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _173 from "./tokenfactory/v1beta1/genesis";
import * as _174 from "./tokenfactory/v1beta1/params";
import * as _175 from "./tokenfactory/v1beta1/query";
import * as _176 from "./tokenfactory/v1beta1/tx";
import * as _177 from "./twap/v1beta1/genesis";
import * as _178 from "./twap/v1beta1/query";
import * as _179 from "./twap/v1beta1/twap_record";
import * as _180 from "./txfees/v1beta1/feetoken";
import * as _181 from "./txfees/v1beta1/genesis";
import * as _182 from "./txfees/v1beta1/gov";
import * as _183 from "./txfees/v1beta1/query";
import * as _277 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _278 from "./gamm/pool-models/stableswap/tx.amino";
import * as _279 from "./gamm/v1beta1/tx.amino";
import * as _280 from "./incentives/tx.amino";
import * as _281 from "./lockup/tx.amino";
import * as _282 from "./streamswap/v1/tx.amino";
import * as _283 from "./superfluid/tx.amino";
import * as _284 from "./tokenfactory/v1beta1/tx.amino";
import * as _285 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _286 from "./gamm/pool-models/stableswap/tx.registry";
import * as _287 from "./gamm/v1beta1/tx.registry";
import * as _288 from "./incentives/tx.registry";
import * as _289 from "./lockup/tx.registry";
import * as _290 from "./streamswap/v1/tx.registry";
import * as _291 from "./superfluid/tx.registry";
import * as _292 from "./tokenfactory/v1beta1/tx.registry";
import * as _293 from "./epochs/query.rpc.Query";
import * as _294 from "./gamm/v1beta1/query.rpc.Query";
import * as _295 from "./incentives/query.rpc.Query";
import * as _296 from "./lockup/query.rpc.Query";
import * as _297 from "./mint/v1beta1/query.rpc.Query";
import * as _298 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _299 from "./streamswap/v1/query.rpc.Query";
import * as _300 from "./superfluid/query.rpc.Query";
import * as _301 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _302 from "./twap/v1beta1/query.rpc.Query";
import * as _303 from "./txfees/v1beta1/query.rpc.Query";
import * as _304 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _305 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _306 from "./gamm/v1beta1/tx.rpc.msg";
import * as _307 from "./incentives/tx.rpc.msg";
import * as _308 from "./lockup/tx.rpc.msg";
import * as _309 from "./streamswap/v1/tx.rpc.msg";
import * as _310 from "./superfluid/tx.rpc.msg";
import * as _311 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _319 from "./rpc.query";
import * as _320 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = { ..._135,
      ..._136,
      ..._293
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._279,
      ..._287,
      ..._294,
      ..._306
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._141,
          ..._277,
          ..._285,
          ..._304
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._142,
          ..._143,
          ..._278,
          ..._286,
          ..._305
        };
      }
    }
  }
  export const incentives = { ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._148,
    ..._280,
    ..._288,
    ..._295,
    ..._307
  };
  export const lockup = { ..._149,
    ..._150,
    ..._151,
    ..._152,
    ..._281,
    ..._289,
    ..._296,
    ..._308
  };
  export namespace mint {
    export const v1beta1 = { ..._153,
      ..._154,
      ..._155,
      ..._297
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._298
    };
  }
  export namespace store {
    export const v1beta1 = { ..._160
    };
  }
  export namespace streamswap {
    export const v1 = { ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._282,
      ..._290,
      ..._299,
      ..._309
    };
  }
  export const superfluid = { ..._167,
    ..._168,
    ..._169,
    ..._170,
    ..._171,
    ..._283,
    ..._291,
    ..._300,
    ..._310
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._284,
      ..._292,
      ..._301,
      ..._311
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._177,
      ..._178,
      ..._179,
      ..._302
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._303
    };
  }
  export const ClientFactory = { ..._319,
    ..._320
  };
}
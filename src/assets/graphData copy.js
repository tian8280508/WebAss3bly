var demoData = {
  nodes: [
    { id: "1000", label: "112222333", type: "weixin", style: {} },
    { id: "2000", label: "58877554", type: "qq", style: {} },
    {
      id: "3000",
      label: "6554778",
      type: "douyin",
      properties: { date: "2022-12-10" },
    },
    {
      id: 4000,
      label: "吴谋凡",
      type: "people",
      tags: ["重"],
      style: { tagColor: "30,30,220" },
    },
    {
      id: 5000,
      label: "涉案人\n黄某某(新街口)",
      type: "people",
      tags: ["企", "核"],
    },
    {
      id: 6000,
      label: "13855465577",
      type: "phone",
    },
    {
      id: 7000,
      label: "15968975545",
      type: "phone",
    },
    {
      id: 8000,
      label: "某某重点案件",
      type: "anjian",
      properties: { date: "2022-12-10" },
    },
    {
      id: 9000,
      label: "新街口某某小区",
      type: "position",
    },
  ],
  links: [
    {
      id: "e-10",
      source: 1000,
      target: 2000,
      type: "vitual",
      label: "虚拟关系",
      style: { strokeColor: "220,220,120" },
    },
    {
      id: "e-20",
      source: 2000,
      target: 3000,
      type: "vitual",
      label: "虚拟关系",
    },
    {
      id: "e-30",
      source: 3000,
      target: 4000,
      type: "vitual",
      label: "虚拟关系",
    },
    { id: "e-40", source: 4000, target: 5000, type: "friend", label: "好友" },
    {
      id: "e-50",
      source: 4000,
      target: 2000,
      type: "vitual",
      label: "使用",
      style: { lineDash: [5, 8, 5] },
    },
    {
      id: "e-60",
      source: 3000,
      target: 1000,
      type: "vitual",
      label: "授权登录",
      style: { strokeColor: "220,20,20" },
    },
    {
      id: "e-70",
      source: 5000,
      target: 3000,
      type: "vitual",
      label: "发布视频",
      properties: { publish_time: "2022-12-15" },
    },
    {
      id: "e-80",
      source: 5000,
      target: 6000,
      type: "vitual",
      label: "拥有",
      style: { lineWidth: 6 },
    },
    { id: "e-90", source: 6000, target: 7000, type: "vitual", label: "拨打" },
    { id: "e-100", source: 7000, target: 4000, type: "vitual", label: "所属" },
    { id: "e-110", source: 1000, target: 8000, type: "relate", label: "涉案" },
    { id: "e-120", source: 6000, target: 8000, type: "relate", label: "涉案" },
    {
      id: "e-130",
      source: 8000,
      target: 9000,
      type: "relate",
      label: "案发地",
    },
  ],


};

var ownDemoData = {
    node: [
        {
            id: "1",
            label: "Metaverse",//eng name
            color: "230,28,139",
            x: 11,// random
            y: 12,
            // content: "A metaverse can be any 3D virtual space powered by technologies – including virtual reality (VR), augmented reality (AR), artificial intelligence (AI), the Internet of Things (IoT), and blockchain – that allows people to interact with each other (and in some cases, with non-human avatars",
        },
         {
            id: "2",
            label: "Web3.0",//eng name
            color: "230,28,139",
            x: 11,// random
            y: 12,
            // content: "Web 3.0 means immersing yourself in the digital experience, and it involves concepts like individual control of personal data, cryptocurrency, and decentralized record keeping on the blockchain.",
        },
         {
            id: "3",
            label: "Blockchain",//eng name
            color: "230,28,139",
            x: 11,// random
            y: 12,
            content: "A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes.",
        },
        {
            id: "4",
            label: "Layer1",//eng name
            color: "230,28,139",
            x: 11,// random
            y: 12,
            content: "Layer 1 refers to a base network, such as Bitcoin, BNB Chain, or Ethereum, and its underlying infrastructure.",
        },
        {
            id: "5",
            label: "Layer2",//eng name
            color: "230,28,139",
            x: 11,// random
            y: 12,
            content: "A layer 2 is any off-chain network, system, or technology built on top of a blockchain to help extend its capabilities.",
        },
        {
            id: "6",
            label: "Zero-knowledge Proof",//eng name
            color: "230,28,139",
            x: 11,// random
            y: 12,
            content: "A zero-knowledge proof is a method by which one party (the prover) can prove to another party (the verifier) that a given statement is true, while avoiding conveying to the verifier any information beyond the mere fact of the statement's truth.",
        },
        {
            id: "7",
            label: "Algebraic structure",//eng name
            color: "230,28,139",
            x: 11,// random
            y: 12,
            content: "An algebraic structure in a variety may be understood as the quotient algebra of term algebra (also called 'absolutely free algebra') divided by the equivalence relations generated by a set of identities.",
        },
        {
            id: "8",
            label: "Groth16",//eng name
            color: "230,28,139",
            x: 11,// random
            y: 12,
            content: "An evergreen from the era of R1CS with extensive and widely used tooling such as bellman, zokrates and circom. ",
        },
        {
            id: "9",
            label: "zk-Snark",//eng name
            color: "230,28,139",
            x: 11,// random
            y: 12,
            content: "The acronym zk-SNARK stands for Zero-Knowledge Succinct Non-Interactive Argument of Knowledge and refers to a proof construction where one can prove possession of certain information, e.g.",
        },
        {
            id: "10",
            label: "Taiko",//eng name
            color: "230,28,139",
            x: 11,// random
            y: 12,
            content: "A Type 1 ZK-EVM Decentralized, Ethereum-equivalent ZK-Rollup.",
        },
    ],
    links:[//键和值之间是冒号
        {
            source: "1",// one of id,
            target: "3",
            style: {
                lineWidth: 4,//
                lineDash: [5, 8],
                fontColor:'250,250,250',//节点字体颜色
                font:'20px yehei',
            }
    
        },
        {
            source: "2",// one of id,
            target: "3",
            style: {
                lineWidth: 4,//
                lineDash: [5, 8],
                fontColor:'250,250,250',//节点字体颜色
                font:'20px yehei',
            }
    
        },
        {
            source: "3",// one of id,
            target: "4",
            style: {
                lineWidth: 4,//
                lineDash: [5, 8],
                fontColor:'250,250,250',//节点字体颜色
                font:'20px yehei',
            }
    
        },
        {
            source: "3",// one of id,
            target: "5",
            style: {
                lineWidth: 4,//
                lineDash: [5, 8],
                fontColor:'250,250,250',//节点字体颜色
                font:'20px yehei',
            }
    
        },
        {
            source: "4",// one of id,
            target: "6",
            style: {
                lineWidth: 4,//
                lineDash: [5, 8],
                fontColor:'250,250,250',//节点字体颜色
                font:'20px yehei',
            }
    
        },
        {
            source: "6",// one of id,
            target: "7",
            style: {
                lineWidth: 4,//
                lineDash: [5, 8],
                fontColor:'250,250,250',//节点字体颜色
                font:'20px yehei',
            }
    
        },
        {
            source: "6",// one of id,
            target: "8",
            style: {
                lineWidth: 4,//
                lineDash: [5, 8],
                fontColor:'250,250,250',//节点字体颜色
                font:'20px yehei',
            }
    
        },
        {
            source: "6",// one of id,
            target: "9",
            style: {
                lineWidth: 4,//
                lineDash: [5, 8],
                fontColor:'250,250,250',//节点字体颜色
                font:'20px yehei',
            }
    
        },
        {
            source: "6",// one of id,
            target: "10",
            style: {
                lineWidth: 4,//
                lineDash: [5, 8],
                fontColor:'250,250,250',//节点字体颜色
                font:'20px yehei',
            }
    
        },
        {
            source: "7",// one of id,
            target: "8",
            style: {
                lineWidth: 4,//
                lineDash: [5, 8],
                fontColor:'250,250,250',//节点字体颜色
                font:'20px yehei',
            }
    
        },
        {
            source: "8",// one of id,
            target: "9",
            style: {
                lineWidth: 4,//
                lineDash: [5, 8],
                fontColor:'250,250,250',//节点字体颜色
                font:'20px yehei',
            }
    
        },
        {
            source: "9",// one of id,
            target: "10",
            style: {
                lineWidth: 4,//
                lineDash: [5, 8],
                fontColor:'250,250,250',//节点字体颜色
                font:'20px yehei',
            }
    
        },
        {
            source: "10",// one of id,
            target: "9",
            style: {
                lineWidth: 4,//
                lineDash: [5, 8],
                fontColor:'250,250,250',//节点字体颜色
                font:'20px yehei',
            }
    
        },
        {
            source: "9",// one of id,
            target: "8",
            style: {
                lineWidth: 4,//
                lineDash: [5, 8],
                fontColor:'250,250,250',//节点字体颜色
                font:'20px yehei',
            }
    
        },
        {
            source: "8",// one of id,
            target: "7",
            style: {
                lineWidth: 4,//
                lineDash: [5, 8],
                fontColor:'250,250,250',//节点字体颜色
                font:'20px yehei',
            }
    
        },
    ]
}

export {demoData,ownDemoData}
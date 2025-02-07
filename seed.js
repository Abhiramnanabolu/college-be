const prisma = require("./prismaClient");

const lis=[
  {
      "roll_number": "24261A0101",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0102",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0103",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0104",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0105",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0106",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0107",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0108",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0109",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0110",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0111",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0112",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0113",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0114",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0115",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0116",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0117",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0118",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0119",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0120",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0122",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0123",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0124",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0125",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0126",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0127",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0128",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0130",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0131",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0132",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0134",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0135",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0136",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0137",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0138",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0139",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0140",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0141",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0142",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0144",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0145",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0146",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0147",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0148",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0149",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0150",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0151",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0152",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0153",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0154",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0155",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0156",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0157",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0158",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0159",
      "startYear": 2024
  },
  {
      "roll_number": "23261A0213",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0201",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0202",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0203",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0204",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0205",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0206",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0207",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0208",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0209",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0211",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0212",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0213",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0214",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0215",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0216",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0217",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0218",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0219",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0220",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0221",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0222",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0223",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0224",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0225",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0226",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0227",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0228",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0229",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0230",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0231",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0232",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0233",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0234",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0235",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0236",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0237",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0238",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0239",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0240",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0241",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0242",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0243",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0244",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0245",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0246",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0247",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0248",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0249",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0250",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0251",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0252",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0253",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0254",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0256",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0257",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0259",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0260",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0261",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0301",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0302",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0303",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0304",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0305",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0306",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0307",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0308",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0309",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0310",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0311",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0312",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0313",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0314",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0315",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0316",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0317",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0318",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0319",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0320",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0321",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0322",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0323",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0324",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0325",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0326",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0327",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0328",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0329",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0330",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0331",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0332",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0333",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0334",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0335",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0336",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0337",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0338",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0339",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0340",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0341",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0342",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0343",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0344",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0345",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0346",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0347",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0348",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0349",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0350",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0351",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0352",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0353",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0354",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0355",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0356",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0357",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0358",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0359",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0360",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0401",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0402",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0403",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0404",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0405",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0406",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0407",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0408",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0409",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0410",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0411",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0412",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0413",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0414",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0415",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0416",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0417",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0418",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0419",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0420",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0421",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0422",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0423",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0424",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0425",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0427",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0428",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0429",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0430",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0431",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0432",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0433",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0434",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0435",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0436",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0437",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0438",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0439",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0440",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0441",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0442",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0443",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0444",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0445",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0446",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0447",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0448",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0449",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0450",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0451",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0452",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0453",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0454",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0455",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0456",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0457",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0458",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0459",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0460",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0461",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0462",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0463",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0464",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0465",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0466",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0467",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0468",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0469",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0470",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0471",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0472",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0473",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0474",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0475",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0476",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0477",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0478",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0479",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0480",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0481",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0482",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0483",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0484",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0485",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0486",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0487",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0488",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0489",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0490",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0491",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0492",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0493",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0494",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0495",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0496",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0497",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0498",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0499",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04A0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04A1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04A2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04A3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04A4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04A5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04A6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04A7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04A8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04A9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04B0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04B1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04B2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04B3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04B4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04B5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04B6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04B7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04B8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04B9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04C0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04C1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04C2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04C3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04C4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04C5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04C6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04C7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04C8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04C9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04D0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04D1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04D2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04D3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04D5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04D6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04D8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04D9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04E1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04E2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04E3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04E4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04E5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04E6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04E7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04E8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04E9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04F0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04F1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04F2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04F4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04F5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04F6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04F7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04F8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04F9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04G0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04G1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04G2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04G3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04G4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04G5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04G6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04G7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04G8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04G9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04H0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04H1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04H2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04H4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04H5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04H6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04H7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04H8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04H9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04J1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04J2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04J3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04J4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04J5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04J6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04J7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04J8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04J9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04K0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04K1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04K2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A04K3",
      "startYear": 2024
  },
  {
      "roll_number": "22261A0523",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0501",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0502",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0503",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0505",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0506",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0507",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0508",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0509",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0510",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0511",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0512",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0513",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0514",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0515",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0516",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0517",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0518",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0519",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0520",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0521",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0522",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0523",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0524",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0525",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0526",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0527",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0528",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0529",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0530",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0531",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0532",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0533",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0534",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0535",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0536",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0537",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0538",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0539",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0540",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0541",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0542",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0543",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0544",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0545",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0546",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0547",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0548",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0549",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0550",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0551",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0552",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0553",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0554",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0555",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0556",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0557",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0558",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0559",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0560",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0561",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0562",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0563",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0564",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0565",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0566",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0567",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0568",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0569",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0570",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0571",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0572",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0573",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0574",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0575",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0576",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0577",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0578",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0579",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0580",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0581",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0582",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0583",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0584",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0585",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0586",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0587",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0588",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0589",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0590",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0591",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0592",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0593",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0594",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0595",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0596",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0597",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0598",
      "startYear": 2024
  },
  {
      "roll_number": "24261A0599",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05A0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05A1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05A2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05A3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05A4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05A5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05A6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05A7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05A8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05A9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05B0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05B1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05B2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05B3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05B4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05B5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05B6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05B7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05B8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05B9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05C0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05C1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05C2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05C3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05C4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05C5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05C6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05C7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05C8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05C9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05D0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05D1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05D3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05D4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05D5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05D6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05D7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05D8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05D9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05E0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05E1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05E2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05E3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05E4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05E5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05E6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05E7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05E8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05E9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05F0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05F1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05F2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05F3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05F4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05F5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05F6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05F7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05F8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05F9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05G0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05G1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05G2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05G3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05G4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05G5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05G6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05G7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05G8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05G9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05H0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05H1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05H2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05H3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05H4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05H5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05H6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05H7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05H8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05H9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05J0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05J1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05J2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05J3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05J4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05J5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05J6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05J7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05J8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05J9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05K0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05K1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05K2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05K3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05K4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05K5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05K6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05K7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05K8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05K9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05L0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05L1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05L2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05L3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05L4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05L5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05L6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05L7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05L8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05L9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05M0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05M1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05M2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05M3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05M4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05M5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05M6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05M7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05M8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05M9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05N0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05N1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05N2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05N3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05N4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05N5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05N6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05N7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05N8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05N9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05P1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05P2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05P3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05P4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05P5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05P6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05P7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05P8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05P9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Q0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Q1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Q2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Q3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Q4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Q5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Q6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Q7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Q8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Q9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05R0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05R1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05R2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05R3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05R4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05R5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05R6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05R7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05R8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05R9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05T0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05T1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05T2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05T3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05T4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05T5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05T6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05T7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05T8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05T9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05U0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05U1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05U2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05U3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05U4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05U5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05U6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05U7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05U8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05U9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05V0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05V1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05V2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05V3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05V4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05V5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05V6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05V7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05V8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05V9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05W0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05W1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05W2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05W3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05W4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05W5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05W6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05W7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05W8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05W9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05X0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05X1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05X2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05X3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05X4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05X5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05X6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05X7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05X8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05X9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Y0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Y1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Y2",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Y3",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Y4",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Y5",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Y6",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Y7",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Y8",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Y9",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Z0",
      "startYear": 2024
  },
  {
      "roll_number": "24261A05Z1",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1201",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1202",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1203",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1204",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1205",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1206",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1207",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1208",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1209",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1210",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1211",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1212",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1213",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1214",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1215",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1216",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1217",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1218",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1219",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1220",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1221",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1222",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1223",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1224",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1225",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1226",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1227",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1228",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1229",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1230",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1231",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1232",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1233",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1234",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1235",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1236",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1237",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1238",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1239",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1240",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1241",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1242",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1243",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1244",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1245",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1246",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1247",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1248",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1249",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1250",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1251",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1252",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1253",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1254",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1256",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1257",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1258",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1259",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1260",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1261",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1262",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1263",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1401",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1402",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1403",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1404",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1405",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1406",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1407",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1408",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1409",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1410",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1411",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1412",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1413",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1414",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1415",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1416",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1417",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1418",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1419",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1420",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1421",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1422",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1423",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1424",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1425",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1426",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1427",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1428",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1429",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1430",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1431",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1432",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1433",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1434",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1435",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1436",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1437",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1438",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1439",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1440",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1441",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1442",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1443",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1445",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1446",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1447",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1448",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1449",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1450",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1451",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1452",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1453",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1454",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1455",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1456",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1457",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1458",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1459",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1460",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1461",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1801",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1802",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1803",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1804",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1805",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1806",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1807",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1808",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1809",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1810",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1811",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1812",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1813",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1814",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1815",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1816",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1817",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1818",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1819",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1820",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1821",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1822",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1823",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1824",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1825",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1826",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1827",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1828",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1829",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1830",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1831",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1832",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1833",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1834",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1835",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1836",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1837",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1838",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1839",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1840",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1841",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1843",
      "startYear": 2024
  },
  {
      "roll_number": "24261A1844",
      "startYear": 2024
  },
  {
      "roll_number": "23261A3222",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3201",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3202",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3203",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3204",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3205",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3206",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3207",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3208",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3209",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3210",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3211",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3212",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3213",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3214",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3215",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3216",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3217",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3218",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3219",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3220",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3221",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3222",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3223",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3224",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3225",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3226",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3227",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3228",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3229",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3230",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3231",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3232",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3233",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3234",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3235",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3236",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3237",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3238",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3239",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3240",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3241",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3242",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3243",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3244",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3245",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3246",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3247",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3248",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3249",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3250",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3251",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3252",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3253",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3254",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3255",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3256",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3257",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3258",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3259",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3260",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3261",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3262",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3263",
      "startYear": 2024
  },
  {
      "roll_number": "24261A3264",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6601",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6602",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6603",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6604",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6605",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6606",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6607",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6608",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6609",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6610",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6611",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6612",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6613",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6614",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6615",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6616",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6617",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6618",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6619",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6620",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6621",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6622",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6623",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6624",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6625",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6626",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6627",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6628",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6629",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6630",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6631",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6632",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6633",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6634",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6635",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6636",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6637",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6638",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6639",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6640",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6641",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6642",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6643",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6644",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6645",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6646",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6647",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6648",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6649",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6650",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6651",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6652",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6653",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6654",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6655",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6656",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6657",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6658",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6659",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6660",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6661",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6662",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6663",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6664",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6701",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6702",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6703",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6704",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6705",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6706",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6707",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6708",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6709",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6710",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6711",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6712",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6713",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6714",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6715",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6716",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6717",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6718",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6719",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6720",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6721",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6722",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6723",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6724",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6725",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6726",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6727",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6728",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6729",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6730",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6731",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6732",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6733",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6734",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6735",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6736",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6737",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6738",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6739",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6740",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6741",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6742",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6743",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6744",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6745",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6746",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6747",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6748",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6749",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6750",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6751",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6752",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6753",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6754",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6755",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6756",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6757",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6758",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6759",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6760",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6761",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6762",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6763",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6764",
      "startYear": 2024
  },
  {
      "roll_number": "24261A6765",
      "startYear": 2024
  }
]


async function main() {
  await prisma.student.createMany({
    data: lis,
  });

  await prisma.student1.createMany({
    data: lis,
  });

  await prisma.student2.createMany({
    data: lis,
  });

  await prisma.student3.createMany({
    data: lis,
  });

  await prisma.student4.createMany({
    data: lis,
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

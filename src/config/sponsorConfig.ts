import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
    title: "",
    description: "",

    usage:
        "サーバーの強化・コーディングAI代に使います。現状3万のミニPC(N100、RAM32GB、SSD500GB)で6つのサーバー(webサイト15個以上同時運営・ツイートアーカイブ・AIサーバー)を同時運営しています。もちろん寄付だけには頼らずバイトもしています。PayPayの方は残高カード機能があるのでそれを使えば寄付できます → https://paypay.ne.jp/article/vpc-howto/",

    showSponsorsList: true,
    showComment: true,
    showButtonInPost: true,

    methods: [
        {
            name: "OFUSE",
            icon: "fa7-solid:hand-holding-heart",
            qrCode: "/assets/images/sponsor/ofuse.png",
            link: "https://ofuse.me/maebahesioru",
            description: "OFUSEで支援する",
            enabled: true,
        },
    ],

    sponsors: [
        {
            name: "電動工具の夕ご飯デブデブみかんのランデブーさん",
            amount: "¥100",
            date: "2026-06-20",
        },
        {
            name: "匿名さん",
            amount: "¥550",
            date: "2026-05-16",
        },
        {
            name: "匿名さん",
            amount: "¥100",
            date: "2026-05-08",
        },
        {
            name: "匿名さん",
            amount: "¥330",
            date: "2026-05-04",
        },
        {
            name: "yaju&uを嗜んでるものさん",
            amount: "¥100",
            date: "2026-05-02",
        },
        {
            name: "匿名さん",
            amount: "¥100",
            date: "2026-04-26",
        },
        {
            name: "BOLIMANIさん",
            amount: "¥330",
            date: "2026-04-06",
        },
        {
            name: "BOLIMANIさん",
            amount: "¥550",
            date: "2026-04-06",
        },
        {
            name: "BOLIMANIさん",
            amount: "¥1,100",
            date: "2026-04-06",
        },
        {
            name: "匿名さん",
            amount: "¥100",
            date: "2026-04-06",
        },
        {
            name: "SAENSキンbotさん",
            amount: "¥100",
            date: "2026-04-05",
        },
        {
            name: "エビマニさん",
            amount: "¥330",
            date: "2026-04-04",
        },
        {
            name: "ガ、キマニさん",
            amount: "¥1,100",
            date: "2026-03-24",
        },
        {
            name: "mondaさん",
            amount: "¥100",
            date: "2026-03-23",
        },
    ],
};

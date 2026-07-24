/**
 * ============================================
 * Milk Tea Roulette V3
 * 奶茶店数据
 * ============================================
 *
 * 以后你只需要修改这个文件。
 *
 * 新增奶茶店：
 * 在最后增加一个对象即可。
 *
 * 删除奶茶店：
 * 删除对应对象即可。
 *
 * 修改中奖概率：
 * 修改 weight 即可。
 *
 * weight 越大，抽中的概率越高。
 * ============================================
 */

const SHOPS = [

    {
        id: 1,
        name: "未来牛肉馆",
        weight: 1
    },

    {
        id: 2,
        name: "头羊市井羊肉馆",
        weight: 1
    },

    {
        id: 3,
        name: "王记羊肉",
        weight: 1
    },

    {
        id: 4,
        name: "睢宁全羊馆",
        weight: 1
    },

    {
        id: 5,
        name: "肉蟹煲",
        weight: 1
    },

    {
        id: 6,
        name: "锅满香地锅",
        weight: 1
    },

    {
        id: 7,
        name: "韩宫宴烤肉",
        weight: 1
    },

    {
        id: 8,
        name: "新拾二烤肉",
        weight: 1
    },

    {
        id: 9,
        name: "小菜园",
        weight: 1
    },

    {
        id: 10,
        name: "耿小川",
        weight: 1
    },

    {
        id: 11,
        name: "翠小二烧烤",
        weight: 1
    },

    {
        id: 12,
        name: "三只羊金泰店",
        weight: 1
    },
     {
        id: 13,
        name: "彭城老拾",
        weight: 1
    },
     {
        id: 14,
        name: "大叹号烤肉",
        weight: 1
    },
     {
        id: 15,
        name: "德庄火锅",
        weight: 1
    },
     {
        id: 16,
        name: "赣饭人",
        weight: 1
    }
];

/**
 * ============================================
 * 以下代码不要修改
 * ============================================
 */

/**
 * 根据权重随机抽取一家店
 * 返回一个店铺对象
 */
function getRandomShop() {

    const totalWeight = SHOPS.reduce(
        (sum, shop) => sum + shop.weight,
        0
    );

    let random = Math.random() * totalWeight;

    for (const shop of SHOPS) {

        random -= shop.weight;

        if (random <= 0) {

            return shop;

        }

    }

    return SHOPS[0];

}

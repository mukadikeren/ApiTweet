const express = require("express");
const jwt = require('jsonwebtoken');
const app = express()
const port = 5000
const userRooter= require("./models/users.js")

// const {PrismaClient} = require('@prisma/client')
// const prisma = new PrismaClient
app.use(express.json())



app.get("/", function (req, res, nex) {
    userRooter.getAllUsers().then(users => res.send(users))


    const tab = [
        {
            id: 1,
            message: " bonjour",
            nom: " keren",
            title: "n'importe qioi",
            motdepasse: "1234"
        },
        {
            id: 1,
            message: " Hello",
            nom: " helene",
            title: "ou aller pour la demo de demain",
            like: 400,
            motdepasse: "4567"

        },
    ]

    const privatekey = `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgFx8NbBHLORGwBjPZkBXhed5Yie8iegU8Smo4M+IY/p7bIY7Jqh3
huZIvNE6LfgfRIjuF9bzCTTkZrCWs0eE30JgxhimlPbf28igUVuYYzwtuXtTiw+9
uggL5jRWYdc/a+n3f841aD2Pi/ViWHrDuDYhdFbdw6EA3XhefaRE0erdAgMBAAEC
gYBW4lmNwU/rJIxSwoTM7WxeiSotKnJkFUh6WqzYSsmiB1FsySUIH0IcFTlNVdrZ
voYkHYlH5gpAJlJSk0DZb3pNP+pv3e3bNZEBpoM4Ln4PVU24V4siZr/XpT1Ft2ZH
+xxtJ8zi50P+zmbY/se03InAWS3SiCHz+fQfHCicHlBuAQJBAKQBEYDJ/+ABl+Ja
DBoqCnUwq3XILqAM4d3giH81vlOw+6/sqnbSQk9DAJKqjJ+WGkLUCJHFO6sX8BhC
7FWPoxsCQQCQXQujAhQf3jf2XJJYvf5H2R8DRMRvOv5f9ttBbykDy4dGzRuLVKAq
CoWvnCbwP0LXyAp64JuBg26o7MebP5FnAkB2qC85tuxh7cUuB2hqJbCbSTNEbCkP
s0JXfXREVWX2tz3h8qEChu1i2182vh4v+DHX2AC7NrANAay8YO8MmHexAkBJlFMJ
C1csgvutArPIrVW8Uwq+hL9GHiBm0xAfgsO53nOdf48JbeGQa/qFbiZejy/HgXrt
9CruUQoG6WA3XagDAkEAhrieCaLOf4NsXpDJ5chDJJynnTolk0pqLDtbmQsgjSVz
1pApjRN7Oa6WqpG2vzebc8Cnr5cNu5J4FxNGzRPVcA==
-----END RSA PRIVATE KEY-----`

    const publickey = `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgFx8NbBHLORGwBjPZkBXhed5Yie8
iegU8Smo4M+IY/p7bIY7Jqh3huZIvNE6LfgfRIjuF9bzCTTkZrCWs0eE30Jgxhim
lPbf28igUVuYYzwtuXtTiw+9uggL5jRWYdc/a+n3f841aD2Pi/ViWHrDuDYhdFbd
w6EA3XhefaRE0erdAgMBAAE=
-----END PUBLIC KEY-----`


console.log(tab);
    // res.send("bienveue chez nous ")
    res.json(tab)
})
app.get("/:id([0-9]+)", function (req, res, nex) {
    userRooter.getUsers(+req.params.id).then(user => res.send(user))

});

app.post("/", function (req, res, nex) {
    userRooter.addUser(req.body).then(user => res.send(user))

}); 
// app.listen(port,()=>{
//     console.log("severeur démaré");
// })

app.put("/", (req, res) => {
    const { nom, motdepasse, like, title, message } = req.body

    const valid = users.some((users) => users.nom === nom && users.motdepasse === motdepasse)
    // console.log("nom : "+ nom)
    // console.log("motdepasse : "+ motdepasse);
    // console.log("like : "+ like);
    // console.log("title : "+ title);
    // console.log("message : "+ message);


    res.send(valid)
    const token = jwt.sign({ nom }, privatekey, { algorithm: "RS256" })

    if (valid) {
        res.send(valid)
    } else {
        res.status(404).send("non trouvable")
    }
})

app.post("/auth", (req, res) => {
    res.send("BONJOUR ")
})

app.delete("/", (req, res) => {
    res.send("Bay bay ")
})

app.listen(port, () => {
    console.log("severeur démaré");
})




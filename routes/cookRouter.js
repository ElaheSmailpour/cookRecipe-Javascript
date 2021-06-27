
const router = express.Router()

const {getKoch}=require("../controller/cookController")

router.get("/",getKoch)



module.exports=router
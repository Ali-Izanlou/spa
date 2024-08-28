import { Link } from "react-router-dom"

const Home = () => {

    return(
        <div className="container">
            <p className="my-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit assumenda dolorem labore soluta fuga eligendi tenetur, quibusdam eveniet sit perferendis accusantium voluptas placeat. Dolores, sed officia. Non, natus impedit alias deleniti laudantium accusantium. Minima neque natus aliquid rem qui quidem maxime perspiciatis id quasi commodi! Eveniet hic, sint voluptas consequatur eligendi inventore praesentium quae dolorum dolore atque perferendis quos veritatis vero autem quisquam explicabo aliquam minus dignissimos doloremque reiciendis consectetur. Placeat, repudiandae alias minima repellendus autem totam vitae incidunt suscipit ea quam quae quisquam quo esse, eos voluptas labore in modi magnam est nostrum. Inventore accusantium cumque facere quos dolores!</p>
            <Link to="/Users" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Users</Link>
            <Link to="/Posts" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">Posts</Link>
        </div>
    )
}

export default Home


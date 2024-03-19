import Image from "next/image"
import Link from "next/link"

const MainCategoryItems = ({category})=> {
    return (
        <Link href={`/${category.title}`} className={'categoryCard'} >
          <Image src={category.image} alt={category.titleP} />
          <div >
            <p>{category.titleP}</p>
          </div>
        </Link>
    )
}

export default MainCategoryItems



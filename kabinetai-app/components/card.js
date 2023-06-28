import Link from "next/link"
const Route = ({diena, pamoka, link}) => {
    return (
        <div>
            {link?(<Link href={`/pamoka/[diena]/[pamoka]`} as={`/pamoka/${diena}/${pamoka}`} className="seeMore">Pamatyti daugiau</Link>):
            <Link href={`/`} as={``} className="seeMore">Atgal</Link>  }
        </div>
    )
}


export default function Card(props) {
    let num = []
    let a = props.kab.map(i => 
        <div className="kabinetas p-2 text-blue-500 bg-blue-100 rounded-xl shadow-md">
            {i}
            
        </div>
        
    )
    console.log(a)
    let b = a.length
    a = a.slice(0, props.num)

    let { diena, pamoka } = props;
        console.log(props)
    return (
        <div className="card w-96 bg-blue-400 text-white shadow-xl rounded-xl p-4 m-1">
            
            <h2 className="text-2xl mb-4 flex flex-row">{`${props.pamoka} pamoka`}
            <div class="badge badge-secondary bg-red-400 badge-lg w-8 rounded-xl text-center ml-52">{b}</div>
            </h2>
            {a}
            {props.link?(<Link href={`/pamoka/${diena}/${pamoka}`} 
                  className="seeMore text-blue-900 hover:underline cursor-pointer mt-4 inline-block font-bold">
                Daugiau
            </Link>):
            (<Link href="/"
            className="seeMore text-blue-900 hover:underline cursor-pointer mt-4 inline-block font-bold">
          Atgal
      </Link>)}
        </div>
    )
}
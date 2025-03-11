import {title} from '../../types/types/title'


const Title: React.FC<title> = ({title}) => {
  return (
    <div className="md:hidden w-5/6 mx-auto my-3">
    <h1 className="font-display tracking-wide text-xl">{title}</h1>
    </div>
    )
}

export default Title

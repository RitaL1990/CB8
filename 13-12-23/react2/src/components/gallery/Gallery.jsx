import Card from '../card/Card'
import './index.css'

const Gallery = ({ GalleryObj }) => {
  return (
    <div className='Gallery'>
      <h2>{GalleryObj.title}</h2>
      <div className='Gallery_items'>
        {
          GalleryObj.list.map(image => <Card cardObj={image} key={image.id} />)
        }
      </div>
    </div>
  )
}

export default Gallery
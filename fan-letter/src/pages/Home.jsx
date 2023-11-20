import Form from 'components/Form'
import Header from 'components/Header'
import LetterBox from 'components/LetterBox'



function Home() {
  console.log("home randering")

  return (
    <div>
      <Header/>
      <Form/>
      <LetterBox/>
    </div>
  )
}


export default Home
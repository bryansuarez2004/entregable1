import './styles/QuoteBox.css'

const QuoteBox = ({quote, handleChangeQuote}) => {
     const {phrase, author} = quote

   
  return (
    <article className="quotebox">
      <h1 className="quotebox__title">INFOGALAX</h1>
      <div className="quotebox__box">
        <p>{phrase}</p>
      </div>
      <button className="quotebox__btn" onClick={handleChangeQuote}>
        <img src="/boton.png" alt="" />
      </button>
      <span className="quotebox__author">{author}</span>
      <img className='quotebox__planet' src="/planeta 4.png" alt="" />
  </article>
  )
}
export default QuoteBox
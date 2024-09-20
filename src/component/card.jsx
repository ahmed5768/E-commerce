function Card(){
const CardData  = [
    {
        src:'images/shirt-1.png'
    },
    {
        src:'images/shirt-2.png'
    },
    {
        src:'images/shirt-3.png'
    },
    {
        src:'images/shirt-4.png'
    },

]

    return(
        <>
        <h1 className="product">New Product</h1>
        <div className="card-section">
        {
            CardData.map((details,index)=>(
                <div key={index} className="glassBox">
                <div className="glassBox__imgBox">
                  <img src={details.src} alt=""/>
                  <h3 className="glassBox__title">Shirts</h3>
                </div>
                <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
              </div>

            ))



        }
        </div>
       

        </>
    )
}
export default Card
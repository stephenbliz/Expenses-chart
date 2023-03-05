type mainProps = {
    data:{
        day: string,
        amount: number,
        id: number
    }[]
    handleTotal: ()=>number
}
const MainBody = ({data, handleTotal}: mainProps) => {

    const handleDisplayPrice = (e:any)=>{
        e.target.parentElement.firstChild.classList.remove('hidden');
        e.target.style.opacity='0.7'
      };
    
      const handleHidePrice =(e:any)=>{
        e.target.parentElement.firstChild.classList.add('hidden');
        e.target.style.opacity='1'
      };

      
    
    return (
        <main className="main-body">
            <h1>Spending - Last seven days</h1>
            <section className="chart-wrapper" >
                {data.map((dat)=>(
                    <div className="chart" key={dat.id}>
                        <h2 className="amount center hidden">{`$${dat.amount}`}</h2>
                        <div 
                            className={`block red ${dat.amount > 50 && 'green'}`}  
                            style={{height:`${dat.amount / 6}rem`}}
                            onMouseOver={(e)=>handleDisplayPrice(e)}
                            onMouseLeave={(e)=>handleHidePrice(e)}
                        >

                        </div>
                        <p className="day center">{dat.day}</p>
                    </div>  
                ))}
            </section>
            <hr />
            <section className="total-wrapper">
                <div className="total-des">Total this week <span className="total">${handleTotal()}</span></div>
                <div className="discount">+1.2% <span className="discount-week">from last week</span></div>
            </section>
        </main>
    );
}
 
export default MainBody;
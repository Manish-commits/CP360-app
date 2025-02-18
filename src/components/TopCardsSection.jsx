import TopCards from './TopCards';
import usersImage from '../assets/users-solid.svg';
import invoiceImage from '../assets/file-invoice-solid.svg';
import squarePoll from '../assets/square-poll-vertical-solid.svg';
import moneyBills from '../assets/money-bills-solid.svg';
import moneyBillUp from '../assets/money-bill-trend-up-solid.svg';
import chartimg1 from '../assets/png-clipart.png';


const TopCardsSection = () => {

    const allCards = [
        {imgSrc: usersImage, cardTitle: 'Total Clients', count: 112, chartImg: chartimg1, profit: 15},
        {imgSrc: invoiceImage, cardTitle: 'Total Invoices', count: 65, chartImg: chartimg1, loss: 12},
        {imgSrc: squarePoll, cardTitle: 'Total Revenue', count: '$7500', chartImg: chartimg1, profit: 9},
        {imgSrc: moneyBills, cardTitle: 'Unpaid', count: '$1200', chartImg: chartimg1, profit: 26},
        {imgSrc: moneyBillUp, cardTitle: 'Overdue', count: '$2210', chartImg: chartimg1, loss: 15},
    ]


  return (
    <div className='grid grid-cols-5 gap-2'>
    {
        allCards.map((card, i) => {
            return <TopCards data={card} key={i}/>
        })
    }
    </div>
  )
}

export default TopCardsSection
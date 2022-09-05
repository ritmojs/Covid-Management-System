
import { isAdminSaved } from '../../../services/admin-service';
import './widget.scss'


const Widget = ({type}) => {

    let data;

    const {oxygen,bed,positive,vaccinated}=isAdminSaved();
    

    // temporary amount of money
    
   

    switch (type) {
        case 'users':
            data = {
                title: 'Total Cases',
                isMoney: false,
                amount:positive,
                link: '',
                icon: (
                    <img alt={{}} src="https://img.icons8.com/cute-clipart/64/000000/coronavirus.png"/>
                ),
            }
            break;
        case 'orders':
            data = {
                title: 'Total Vaccinated',
                isMoney: false,
                amount:vaccinated,
                link: '',
                icon: (
                    <img alt={{}} src="https://img.icons8.com/external-others-cattaleeya-thongsriphong/64/000000/external-Vaccine-vaccine-blue-others-cattaleeya-thongsriphong-6.png"/>
                ),
            }
            break;
        case 'earnings':
            data = {
                title: 'Oxygen Available',
                isMoney: false,
                link: 'liters',
                amount:oxygen,
                icon: (
                    <img alt={{}} src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/000000/external-oxygen-medical-icongeek26-outline-colour-icongeek26.png"/>
                ),
            }
            break;
        case 'balance':
            data = {
                title: 'BEDS AVAILABLE',
                isMoney: false,
                amount:bed,
                link: 'Count',
                icon: (
                    <img alt={{}} src="https://img.icons8.com/ios/50/000000/empty-bed.png"/>
                ),
            }
            break;
        default:
            break;
    }



  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && '$'} {data.amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            
                {data.icon}
        </div>
    </div>
  )
}

export default Widget
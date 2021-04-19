import { Bar } from 'react-chartjs-2';
import { Box, makeStyles} from '@material-ui/core';


const useStyle = makeStyles({
        container : {
            width: '70%',
            marginTop: 50

        }
}) 


const Chart = ({ data: { confirmed, recovered, deaths}}) => {
    const classes = useStyle();
    return (
        <Box className = {classes.container}>
            {confirmed ? (
            <Bar
                data= { {
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        data: [confirmed.value, recovered.value, deaths.value],
                        backgroundColor: [
                            'rgba(255, 0, 0, 0.7)',
                            'rgba(0, 255, 0, 0.7)',
                            'rgba(0, 0, 0, 0.7)',
                            
                            
                        ],
                    
                    }]
                }}
                    options = {{
                        legend: {display: false},
                        title: {display:true, text: 'Covid-19 Graph'}

                    }}
                
                
            /> ) : ""
        }</Box>

    )

}

export default Chart;

    


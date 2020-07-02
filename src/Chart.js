import React from 'react'
import {
    XAxis,
    YAxis,
    VerticalBarSeries,
    FlexibleXYPlot,
    VerticalGridLines,
    HorizontalGridLines,
} from 'react-vis'
import firebase from './firebase'


class Chart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stats: []
        }
    }

    //get stats from DB
    componentWillMount() {
        const db = firebase.firestore();
        db.collection('totalStats').onSnapshot((snapshot) => {
            const totalStats = [];
            snapshot.forEach((doc) => {
                totalStats.push({ x: doc.data().name, y: doc.data().count });
            })
            this.setState({ stats: totalStats });
        })
    }




    render() {
        const hint = this.state.hint;
        return (

            <FlexibleXYPlot
                width={800}
                height={400}
                xType="ordinal"
                margin={100, 100, 100, 100}
            >
                
                <VerticalBarSeries
                type="log"
                    color="#60f"
                    data={this.state.stats} />
                <XAxis tickLabelAngle={-45} tickSizeInner={30} tickPadding={14} />
                <VerticalGridLines/>
                <HorizontalGridLines/>
                <YAxis/>
                
            </FlexibleXYPlot>

        )
    }
}

export default Chart;
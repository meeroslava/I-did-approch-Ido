import React from 'react'
import {
    XAxis,
    YAxis,
    VerticalBarSeries,
    FlexibleXYPlot
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
        return (

            <FlexibleXYPlot
                width={1100}
                height={300}
                xType="ordinal"
                yType="ordinal"
                margin={40, 10, 10, 100}
            >
                <VerticalBarSeries
                    color="#60f"
                    data={this.state.stats} />
                <XAxis tickLabelAngle={-45} tickSizeInner={10} tickPadding={14} />
                <YAxis />
            </FlexibleXYPlot>

        )
    }
}

export default Chart;
import React, {Component} from 'react';
import {usersJSON} from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
	}

    componentWillReceiveProps(nextProps) {

        const user2 = this.state.users;
        if (nextProps.sortBy === 'age') {
            user2.sort(this.compareByAge);
        } else
            if (nextProps.sortBy === 'name') {
                user2.sort(this.compareByName)
            } else
                if (nextProps.sortBy === 'points') {
                    user2.sort(this.compareByPoints)
                } else
                    if (nextProps.sortBy === 'rank') {
                        user2.sort(this.compareByRank)
                    }

    }



    //users.sort(compareByAge)

    // complete the comparators
    compareByAge(a, b) {
        if (a.age < b.age)
            return -1;
        if (a.age > b.age)
            return 1;
        return 0;

    }

    compareByName(a, b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }

    compareByPoints(a, b) {
        if (a.points < b.points)
            return -1;
        if (a.points > b.points)
            return 1;
        return 0;
    }

    compareByRank(a, b) {
        if (a.rank < b.rank)
            return -1;
        if (a.rank > b.rank)
            return 1;
        return 0;
    }

    render() {

        const { users } = this.state;
        if (users) {
            console.log();

        }


        return (<div>
            <table className="table table-striped">
                <thead>
                    <tr key="head">
                        <th>Age</th>
                        <th>Name</th>
                        <th>Points</th>
                        <th>Rank</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map((row, index) => (

                        <tr key={row.rank}>
                            <td >{row.age}</td>
                            <td>{row.name}</td>
                            <td>{row.points}</td>
                            <td>{row.rank}</td>
                        </tr>
                    )
                    )}

                </tbody>
            </table>
        </div>)
    }
}

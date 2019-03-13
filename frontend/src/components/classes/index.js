import React from 'react';
import Typography from '@material-ui/core/Typography';
import Classes from './Classes';
import Create from './Create';
import axios from 'axios';
//import { ROWS } from '../../store';


export default class Class extends React.Component {

    constructor(props) {
        super(props); 
        this.state = { rows: [] };
    }

    componentDidMount() {
        var classObj = this;
        axios.get('http://localhost:9000/api/v1/class')
        .then(function (response) {
            //console.log(response.data.data);

            classObj.setState({ rows: response.data.data});
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    handleCreate = (newItem) => {
        let classObj = this;
        //console.log(this.props.token);
        let config = {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'authtoken': this.props.token
            }
        }
          
        let data = {
            vendor_id : '5be32eed-06fa-481e-bccb-250956a92b1b',
            name: newItem.name,
            description: newItem.description,
            location: newItem.location,
            price: newItem.price,
            seats: '6',
            image_url: 'https://uploads-ssl.webflow.com/5bebfd31fb29cc51aeb8688a/5bebfd31fb29cc4e27b86895_transparent_16_9-p-1080.png',
            start_timestamp: newItem.start_timestamp,
            end_timestamp: newItem.end_timestamp,
        };

        let start_d = data.start_timestamp;
        //console.log(start_d);
        let start_date = start_d.split(".")[0];
        data.start_timestamp = start_date;

        let end_d = data.end_timestamp;
        let end_date = end_d.split(".")[0];
        data.end_timestamp = end_date;
        //console.log(data);
          
        axios.post('http://localhost:9000/api/v1/class', data, config)
            .then(function (response) {
               //console.log(response);
               
               const list = [...classObj.state.rows];

                newItem.id = response.data.data[0];
                list.push(newItem);
                //console.log(newItem);
                classObj.setState({ rows: list });
            })
            .catch(error => {
                console.log(error);
            })

            /*
        const list = [...this.state.rows];
        // add the new item to the list
        const ids = list.map(x => x.id);
        let max_id = Math.max(...ids) + 1;
        newItem.id = max_id;
        list.push(newItem);
        //console.log(newItem);
        this.setState({ rows: list });*/
    };

    handleDelete = id => {

        let config = {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'authtoken': this.props.token
            }
        }
        axios.delete('http://localhost:9000/api/v1/class/' + id, config)
        .then(function (response) {
            //console.log(response)
        })
        .catch(error => {
            //console.log(error);
        })
        this.setState(({ rows }) => ({
            rows: rows.filter(ex => ex.id !== id)
        }))
    }

    handleEdit = row => {
        
        let data = {
            vendor_id: '5be32eed-06fa-481e-bccb-250956a92b1b',
            name: row.name,
            description: row.description,
            location: row.location,
            price: row.price,
            seats: '6',
            image_url: 'https://uploads-ssl.webflow.com/5bebfd31fb29cc51aeb8688a/5bebfd31fb29cc4e27b86895_transparent_16_9-p-1080.png',
            start_timestamp:row.start_timestamp,
            end_timestamp: row.end_timestamp,
        };

        //console.log(data.start_timestamp);
        //console.log(row.start_timestamp);
        //console.log(typeof(row.start_timestamp));
        let start_d = data.start_timestamp;
        let start_date = start_d.split(".")[0];
        data.start_timestamp = start_date;

        let end_d = data.end_timestamp;
        let end_date = end_d.split(".")[0];
        data.end_timestamp = end_date;
        //console.log(data);
        //console.log(data.start_timestamp);
        //console.log(res);

        
        let config = {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'authtoken': this.props.token
            }
        }

        //console.log('edit')
        //console.log(row);
        axios.post('http://localhost:9000/api/v1/class/'+ row.id, data, config)
        .then(function (response) {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })

        let local_rows = this.state.rows;
        let idx = local_rows.findIndex(ex => ex.id === row.id);
        local_rows[idx] = row;
        this.setState({rows : local_rows});
        //console.log(this.state)
    }

    // handleEdit = row => {
    //     console.log(row);
    //     this.setState(({ rows }) => ({
    //         rows: [
    //             ...rows.filter( ex => ex.id !== row.id),
    //             row
    //         ],
    //         row
    //     }))
    // }

    
    render() {
      const { rows } = this.state;
      //const { token } = this.props
  
      return (
        <div>
            <Typography variant="h3" style={{textAlign:"left", marginTop:100, marginLeft:100}}>
                Classes
            </Typography>
            <Classes rows={rows} _onDelete={this.handleDelete}  _onEdit={this.handleEdit}/>
            <Create _onCreate={this.handleCreate}/>
        </div>
      );
    }
  }
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab : 0 };

    }

    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>React Projects #1</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>React Projects #1</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>React Projects #1</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>
                    </Card>

                </div> 
            )
        }else if(this.state.activeTab===1){
            return(
                <div><h1>This is Angular</h1></div>
            )
        }
        else if(this.state.activeTab===2){
            return(
                <div><h1>This is VeuJs</h1></div>
            )
        }
        else if(this.state.activeTab===3){
            return(
                <div><h1>This is MongoDB</h1></div>
            )
        }
        else{
            return(
                <div><h1>This is React</h1></div>
            )
        }
    }

    


    render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} 
                onChange={(tbaId) => this.setState({activeTab: tbaId})} ripple>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>VeuJS</Tab>
                <Tab>MongoDB</Tab>
                </Tabs>

                <Grid>
                <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;
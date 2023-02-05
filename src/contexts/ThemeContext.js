import React,{createContext,Component} from "react";

export const ThemeContext=createContext();

class ThemeContextProvider extends Component {

    state={
        isLightTheme:true,
        light:{syntax:'#535c68',ui:'#c7ecee',bg:'#7ed6df'},
        dark:{syntax:'#f5f6fa',ui:'##303952',bg:'#192a56'}
    }

    render(){
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;
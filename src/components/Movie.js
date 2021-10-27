import React from 'react'

class Movie extends React.Component {
  render () {
    const year = 2002

    // Méthode 1
    // if (this.props.year < year) {
    //   return (
    //     <div>
    //       <h3>{this.props.title}</h3>
    //       <p>Le film est vieux</p>
    //     </div>
    //   )  
    // } else {
    //   return (
    //     <div>
    //       <h3>{this.props.title}</h3>
    //       <p>Le film est récent</p>
    //     </div>
    //   )  
    // }

    // Méthode 2
    return (
      <div>
        <h3>{this.props.title}</h3>
        {this.props.year < year ? (
          <p>Le film est vieux</p>
        ) : (
          <p>Le film est récent</p>
        )}
      </div>
    )

    // Méthode 3
    // return (
    //   <div>
    //     <h3>{this.props.title}</h3>
    //     {this.props.year < year && <p>Le film est vieux</p>}
    //     {this.props.year >= year && <p>Le film est récent</p>}
    //   </div>
    // )
  }
}

export default Movie

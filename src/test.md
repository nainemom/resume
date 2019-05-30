## Installation

`npm install markdown-loader`

## [Changelog](CHANGELOG.md) 

## Usage

Since marked's output is HTML, it's best served in conjunction with the [html-loader](https://github.com/webpack/html-loader).

### Webpack 2+

```javascript
{
    module: {
        rules: [{
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            /* your options here */
                        }
                    }
                ]
            }]
    }
}
```
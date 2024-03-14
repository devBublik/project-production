import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader =
    {
        test: /\.tsx?$/,
            use: 'ts-loader',
        exclude: /node_modules/,
    }


    const styleLoaders = {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Creates `style` nodes from JS strings
                // "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module')),
                            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                        }
                    }
                },
                // Translates CSS into CommonJS

                // Compiles Sass to CSS
                "sass-loader",
            ],
        };


    return [
        typescriptLoader,
        styleLoaders,
    ]
}
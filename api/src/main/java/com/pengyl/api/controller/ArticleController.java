package com.pengyl.api.controller;

import com.pengyl.api.bean.Article;
import com.pengyl.api.service.IArticleService;
import com.pengyl.api.util.ModelMap;
import com.pengyl.api.util.PageParams;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

@Api("文章")
@RestController
@RequestMapping("article")
@CrossOrigin
public class ArticleController {

    @Autowired
    private IArticleService articleService;

    @ApiOperation("获取文章列表")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "page", value = "当前页 ", required = false, dataType = "Integer", paramType = "query"),
            @ApiImplicitParam(name = "pageSize", value = "页大小", required = false, dataType = "Integer", paramType = "query")})
    @ApiResponses({@ApiResponse(code = 200, message = "success", response = ModelMap.class)})
    @RequestMapping(value = "",method = RequestMethod.GET)
    public ModelMap getArticleList(ModelMap modelMap, PageParams page){

        modelMap.setMessage("获取文章接口");
        modelMap.setResult(articleService.findList());
        modelMap.setStatus(1);
        return modelMap;
    }

    @ApiOperation("获取文章")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "id ", required = false, dataType = "String", paramType = "query")})
    @ApiResponses({@ApiResponse(code = 200, message = "success", response = ModelMap.class)})
    @RequestMapping(value = "/{id}",method = RequestMethod.GET)
    public ModelMap getArticle(ModelMap modelMap, @PathVariable String id){
        modelMap.setMessage("获取文章接口");
        modelMap.setResult("hhh");
        modelMap.setStatus(1);
        return modelMap;
    }


    @ApiOperation("保存文章")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "article", value = "article", required = false, dataType = "Article", paramType = "body")})
    @ApiResponses({@ApiResponse(code = 200, message = "success", response = ModelMap.class)})
    @RequestMapping(value = "",method = RequestMethod.POST)
    public ModelMap saveArticle(@RequestBody Article article,@ApiIgnore ModelMap modelMap){
        article=  articleService.save(article);
        modelMap.setMessage("保存文章接口");
        modelMap.setResult(article);
        modelMap.setStatus(1);
        return modelMap;
    }

    @ApiOperation("删除文章")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "id ", required = false, dataType = "String", paramType = "query")})
    @ApiResponses({@ApiResponse(code = 200, message = "success", response = ModelMap.class)})
    @RequestMapping(value = "",method = RequestMethod.DELETE)
    public ModelMap deleteArticle(ModelMap modelMap){
        modelMap.setMessage("删除文章接口");
        modelMap.setResult("hhh");
        modelMap.setStatus(1);
        return modelMap;
    }
}

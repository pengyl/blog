package com.pengyl.api.service.impl;

import com.pengyl.api.bean.Article;
import com.pengyl.api.mapper.ArticleMapper;
import com.pengyl.api.service.IArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service("articleService")
public class ArticleServiceImpl implements IArticleService {
    @Autowired
    private ArticleMapper articleMapper;

    @Override
    public List<Article> findList() {
        return articleMapper.findList();
    }

    @Override
    public Article save(Article article) {
        article.setId(UUID.randomUUID().toString());
        article.setCreateTime(new Date());
        article.setCreateUser("");
        article.setUpdateUser("");
        article.setLastUpdateTime(new Date());
        if(articleMapper.save(article) >0){
            return article;
        }
        return null;
    }


}

package com.pengyl.api.service.impl;

import com.pengyl.api.bean.Article;
import com.pengyl.api.mapper.ArticleMapper;
import com.pengyl.api.service.IArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("articleService")
public class ArticleServiceImpl implements IArticleService {
    @Autowired
    private ArticleMapper articleMapper;

    @Override
    public List<Article> findList() {
        return articleMapper.findList();
    }
}

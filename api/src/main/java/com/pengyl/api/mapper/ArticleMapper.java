package com.pengyl.api.mapper;

import com.pengyl.api.bean.Article;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleMapper {
    int insert(Article record);

    int save(Article record);

    int insertSelective(Article record);

    List<Article> findList();


}
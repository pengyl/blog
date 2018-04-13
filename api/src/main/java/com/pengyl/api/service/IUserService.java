package com.pengyl.api.service;

import com.pengyl.api.bean.User;

public interface IUserService {
    User findByLoginName(String loginName);

}

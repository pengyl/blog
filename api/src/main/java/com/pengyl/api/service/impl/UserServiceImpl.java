package com.pengyl.api.service.impl;

import com.pengyl.api.bean.User;
import com.pengyl.api.mapper.UserMapper;
import com.pengyl.api.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserMapper userMapper;
    @Override
    public User findByLoginName(String loginName) {
        return userMapper.findByLoginName(loginName);
    }
}

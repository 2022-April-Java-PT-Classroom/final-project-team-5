package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.model.Comment;
import org.wecancodeit.serverside.model.Event;
import org.wecancodeit.serverside.model.Post;
import org.wecancodeit.serverside.repository.CommentRepo;
import org.wecancodeit.serverside.repository.EventRepo;
import org.wecancodeit.serverside.repository.PostRepo;

import javax.annotation.Resource;
import javax.crypto.CipherInputStream;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private EventRepo eventRepo;

    @Resource
    private PostRepo postRepo;

    @Resource
    protected CommentRepo commentRepository;

    @Override
    public void run(String... args) throws Exception {

        Comment braid = new Comment("This is a great question, thank you for asking before doing anything. What types of braids are you interested in getting?");
        commentRepository.save(braid);

        Comment braid2 = new Comment("I really like a style I have seen on a girl at school, all of her hair is braided in a bunch of tiny braids");
        commentRepository.save(braid2);

        Comment response = new Comment("I have never experience that but it sounds really tough. I hope you can heal from that situation");
        commentRepository.save(response);

        Comment response2 = new Comment("Oh I've been though something similar to that... I was really hurt, it's been a couple of years now and have found peace. The conflict you feel between wanting to be accepting and being hurt by one person does not invalidate that someone you trusted caused you pain");
        commentRepository.save(response2);



        Event teamAgape = new Event("5th Annual Equality March", "Join the Agape group as we take a stand for human rights. We will be having our annual equality for all march in downtown Cleveland. We will meet at the city hall and walk around the block. Hope to see you there! ", "Cleveland, OH", "2022-09-21", "Team Agape", "13:30");
        eventRepo.save(teamAgape);

        Event roe = new Event("Our Body, Our Choice", "Make your voice heard! Planned Parenthood is hosting a peaceful protest to fight against the overturning of Roe v. Wade. We will be gathering outside the Supreme Courthouse of Ohio.", "Columbus, OH", "2022-10-15", "Planned Parenthood", "12:00");
        eventRepo.save(roe);

        Event hrc = new Event("Old City Canvas", "Come with us to canvas Old City to garner interest in our right to vote and make the change we wish to see. Water will be provided.", "Philadelphia, PA ", "2022-11-1", "Human Rights Campaign", "17:30");
        eventRepo.save(hrc);

        Post postOne = new Post("Cultural Appropriation?","As a white person would it be cultural appropriation for my to get braids in my hair? ", braid, braid2);
        postRepo.save(postOne);

        Post postTwo = new Post("How I responded to my ex coming out as trans and why we are no longer together"," I dated my ex for four years, we had reached a point that we were talking about marriage and future plans and I thought it was all going well, A month later it all came to a halt when late one night he told me whe thinks that we should break up. When I asked why? He was moving to Colorado and he had decided to transition into a female. This left me stunned, and hurt. All of a sudden the last four years felt like a lie and I didn't understand how they could have kept something so big from me. But I agreed. The love was still there but everything else seemed to have changed. As a result there was a lot of hurt and confusion, and I still feel that way about the whole situation. But sometimes I feel bad as someone who tries to be accepting of all. Like there could have been more I could have done for us. Has anyone else experience anything like this or felt this way?" ,response, response2);
        postRepo.save(postTwo);
    }

}
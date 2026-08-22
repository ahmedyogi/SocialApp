using System;
using API.Entities;

namespace API.Interfaces;

public interface IMemberRepository
{
    void Update(Members member);

    Task<bool> saveAllAsync();
    Task<IReadOnlyList<Members>> GetMembersAsync();
    Task<Members?> GetMemberByIdAsync(string id);
    Task<IReadOnlyList<Photo>> GetPhotosForMemberAsync(string memberId);
}

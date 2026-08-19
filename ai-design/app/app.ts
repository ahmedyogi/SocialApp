import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Nav } from '../layout/nav/nav';

@Component({
  selector: 'app-root',
  imports: [Nav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected Members = signal<any>([]);

  protected readonly MemberPhotos = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDKqdg6hVlAABTTl_gNXNsdnq2jcllTP3JC2wWGAKqvAl3RTPzOC4TC8XOBYi_UCa4syPEUpu-aytggBNaI8PJ3-Ab2ePVywAe-BG3EbA9Vittd1446VvVbqHFV_3n0hSK-OZ1W6-uVHURHYJfyhLSplZoC6uMcmrvduwEyxRSo2deePh_7zoPaU9RpghdGqCj8pOjhr_OnfcO7fiABz0LN6OFQgscT28VhzKSRaUpbEQQHB_ZX9G5Q',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBPgeE5CemIHhjAD2M1p4v-icaNnmdp04j2s-WWs8sLeyfh3z9YWJhVQnI8f5JjjhrFo3FIgdtzcnJENhE0mCTgReYsd4VLWJT1EEf1zofbp0aetBAGuCjwu1B59JtP32Rz_8GOv4FJyCkc3Kdzog0K1B7S9D3yP3Z9-s7dqdgjLSsFAzVK3tWQJP-fse8sc6gdqGha3FfzWSrSs4rHK8or4FBUKIF0fdzZNO9wHE_VEIc3lbQDzvTk',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAE7UPg8pAVzEqioo_EMCoh4rXllvNGWZ3V8VLVsoFPeKsMOxLzo4ftIlwsuYl0yWP1KC6MW6nLFx_2PSz4G6L4pWLzqQ8ooyN9Js6yeq_ZMUpvUfKeNJjjDsMFUKtiyit3vaNmGjggrzFSTShPYsb2kzP27TUV0A7_EB-4ePlNMIL6xrq3gXQm27eViugS8GpK-PN-U8OeaYU8Y5g6mww9fwsMRWYLwS55XpSkrjJgU0ATWcTq_Zuh',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDvPOFxRgxIw4FyJ1m8nDatjL_EtJqVr3qiqWy65SuLEcLt2a5G307oYevsg8UdDS94Ef7anepOhkldECjGMpGbcTt9ooxFl1lJkKCEnj3ityOswi7PwXJkQjG0J5KHiDOB77838QBbF91-g5us8zuHAXzzVFQilEcy2pKSfbGC5It7B0hHV5qOCsvQPrwADn1TjJYZ-WoHu4RCi8gIRcRPStdr-C7C9hzOaXfdRT21P3Nlf8U6R_L5',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAEGoms9uDE7I4ForEGmeS3lAVQrt4NK9-NzW06O-wbYjXDlVZjlKOToZBOuRzYzdFn0jLVZNBJuHIWaWDOgVi0v2jst_6bDwOYGGDCCDP_FYXtBakYg3k5T-54tNt6gW9-VX4TUM3eADluB6jcd5A4pol_pfx6cYHXq23T2ntv9HleDW6L-wUKI9-0BYc2w1u1PpiVn0Cg4QH7D-P2nBP_rc-Ci0ztnrerAPeYqR_emCdxXCjlr7Wt',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDH-Umux_G7be4_URTbcWFdxaADjOJ2JWX7g1_JAnviF4zaPlamrbcO7D8Ya4xQhS5JXtqifh8NeCr3GODyi3iWFz1JaMo50Tvv0X4Klus34_kE9q4nBpvLMO3yDvdPyy469QUGtEpgIA4Xk8Rg8seMWrOitHNLOdFpXxrEZVrmB37w-meuO1SjiZ5J_54R9Nej-PIIL1QKu-t9i33aem7rfqlM76qb8iK6Ylv5VzWv_rPlxinJp6Mx',
  ];

  protected readonly Tags = [
    ['Art', 'Coffee', 'Museums'],
    ['Cooking', 'Tech', 'Dogs'],
    ['Hiking', 'Plants', 'Foodie'],
    ['Architecture', 'Design', 'Nightlife'],
    ['Travel', 'Wine', 'Photography'],
    ['Music', 'Vintage', 'Concerts'],
  ];

  protected readonly Distances = [
    '2 miles away',
    '5 miles away',
    '1 mile away',
    '8 miles away',
    '3 miles away',
    '4 miles away',
  ];

  ngOnInit(): void {
    this.http.get('https://localhost:7141/api/Members').subscribe({
      next: (response) => this.Members.set(response),
      error: (error) => console.log(error),
      complete: () => console.log('completed the http request'),
    });
  }
}
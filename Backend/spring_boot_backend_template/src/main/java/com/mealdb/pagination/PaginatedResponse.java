package com.mealdb.pagination;

import java.util.List;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "Paginated response with metadata")
public class PaginatedResponse<T> {

	@Schema(description = "List of items on the current page")
	private List<T> content;
	private int page;
	private int size;
	private long totalElements;
	private int totalPages;
	
	public PaginatedResponse(List<T> content, int page, int size, long totalElements)
	{
		this.content = content;
		this.page = page;
		this.size = size;
		this.totalElements = totalElements;
		this.totalPages = (int)Math.ceil((double) totalElements / size);
	}
}

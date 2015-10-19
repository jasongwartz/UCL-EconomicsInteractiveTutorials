import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from scrapy.selector import HtmlXPathSelector
import urlparse

class SamBakerItem(scrapy.Item):
	title = scrapy.Field()
	link = scrapy.Field()
	desc = scrapy.Field()
	url = scrapy.Field()


class SamBakerSpider(CrawlSpider):
	name = "sambaker"
	allowed_domains = ["sambaker.com"]
	start_urls = ["http://sambaker.com/econ/"]
	
	rules = [
		Rule(LinkExtractor(), follow=True, callback="self.parse_item") ]
	
	def parse(self, response):

		hxs = scrapy.Selector(response)
		all_links = hxs.xpath('*//a/@href').extract()
		items = []
		
		for link in all_links:
			
			item = SamBakerItem()
			
			link = urlparse.urljoin(response.url, link)
			item['url'] = link
			items.append(item)
		
	#	print items
		
		for i in items:
			yield scrapy.Request(i['url'], callback=self.parse_dir_contents)
	
	def parse_dir_contents(self, response):
		
		print "\n\n\n\n\n"
		print "Running parse_dir_contents"

		for sel in response.xpath("//p//a[@class='pl']"):
				print "!!!!!!!!!!!!!"
				print sel.xpath('text()').extract()
				print sel.xpath('@href').extract()
				print "\n\n\n\n\n"

		for sel in response.xpath('//ul/li'):
			
			item = SamBakerItem()
			item['title'] = sel.xpath('a/text()').extract()
			yield item

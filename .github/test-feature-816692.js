#!/usr/bin/env node
const config = require('./mcp-config');

(async () => {
  try {
    const feature = await config.fetchFeature('AB#816692');
    
    console.log('\n✅ FEATURE 816692 - COMPLETE DATA\n');
    console.log('Title:', feature.title);
    console.log('State:', feature.state);
    console.log('Priority:', feature.priority);
    
    if (feature.acceptanceCriteria) {
      console.log('\n🎯 ACCEPTANCE CRITERIA (HTML):');
      console.log(feature.acceptanceCriteria.substring(0, 300) + '...\n');
      
      const cleanAC = feature.acceptanceCriteria
        .replace(/<[^>]*>/g, '')
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .split('\n')
        .filter(line => line.trim().length > 0)
        .map(line => line.trim());
      
      console.log('🎯 ACCEPTANCE CRITERIA (CLEAN):');
      cleanAC.forEach((line, i) => {
        if (line.length > 0) {
          console.log(`${i + 1}. ${line}`);
        }
      });
    } else {
      console.log('⚠️  No acceptance criteria found');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
})();

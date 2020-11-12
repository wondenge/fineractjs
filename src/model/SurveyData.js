

import ApiClient from '../ApiClient';
import ComponentData from './ComponentData';
import QuestionData from './QuestionData';

/**
 * The SurveyData model module.
 * @module model/SurveyData
 * @version 1.0
 */
class SurveyData {
    /**
     * Constructs a new <code>SurveyData</code>.
     * @alias module:model/SurveyData
     */
    constructor() { 
        
        SurveyData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SurveyData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SurveyData} obj Optional instance to populate.
     * @return {module:model/SurveyData} The populated <code>SurveyData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SurveyData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('componentDatas')) {
                obj['componentDatas'] = ApiClient.convertToType(data['componentDatas'], [ComponentData]);
            }
            if (data.hasOwnProperty('questionDatas')) {
                obj['questionDatas'] = ApiClient.convertToType(data['questionDatas'], [QuestionData]);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
            }
            if (data.hasOwnProperty('validFrom')) {
                obj['validFrom'] = ApiClient.convertToType(data['validFrom'], 'Date');
            }
            if (data.hasOwnProperty('validTo')) {
                obj['validTo'] = ApiClient.convertToType(data['validTo'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
SurveyData.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/ComponentData>} componentDatas
 */
SurveyData.prototype['componentDatas'] = undefined;

/**
 * @member {Array.<module:model/QuestionData>} questionDatas
 */
SurveyData.prototype['questionDatas'] = undefined;

/**
 * @member {String} key
 */
SurveyData.prototype['key'] = undefined;

/**
 * @member {String} name
 */
SurveyData.prototype['name'] = undefined;

/**
 * @member {String} description
 */
SurveyData.prototype['description'] = undefined;

/**
 * @member {String} countryCode
 */
SurveyData.prototype['countryCode'] = undefined;

/**
 * @member {Date} validFrom
 */
SurveyData.prototype['validFrom'] = undefined;

/**
 * @member {Date} validTo
 */
SurveyData.prototype['validTo'] = undefined;






export default SurveyData;


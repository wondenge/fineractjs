

import ApiClient from '../ApiClient';
import Component from './Component';
import Question from './Question';

/**
 * The Survey model module.
 * @module model/Survey
 * @version 1.0
 */
class Survey {
    /**
     * Constructs a new <code>Survey</code>.
     * @alias module:model/Survey
     */
    constructor() { 
        
        Survey.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Survey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Survey} obj Optional instance to populate.
     * @return {module:model/Survey} The populated <code>Survey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Survey();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('components')) {
                obj['components'] = ApiClient.convertToType(data['components'], [Component]);
            }
            if (data.hasOwnProperty('questions')) {
                obj['questions'] = ApiClient.convertToType(data['questions'], [Question]);
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
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Survey.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/Component>} components
 */
Survey.prototype['components'] = undefined;

/**
 * @member {Array.<module:model/Question>} questions
 */
Survey.prototype['questions'] = undefined;

/**
 * @member {String} key
 */
Survey.prototype['key'] = undefined;

/**
 * @member {String} name
 */
Survey.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Survey.prototype['description'] = undefined;

/**
 * @member {String} countryCode
 */
Survey.prototype['countryCode'] = undefined;

/**
 * @member {Date} validFrom
 */
Survey.prototype['validFrom'] = undefined;

/**
 * @member {Date} validTo
 */
Survey.prototype['validTo'] = undefined;

/**
 * @member {Boolean} new
 */
Survey.prototype['new'] = undefined;






export default Survey;




import ApiClient from '../ApiClient';

/**
 * The ScorecardValue model module.
 * @module model/ScorecardValue
 * @version 1.0
 */
class ScorecardValue {
    /**
     * Constructs a new <code>ScorecardValue</code>.
     * @alias module:model/ScorecardValue
     */
    constructor() { 
        
        ScorecardValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScorecardValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScorecardValue} obj Optional instance to populate.
     * @return {module:model/ScorecardValue} The populated <code>ScorecardValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScorecardValue();

            if (data.hasOwnProperty('questionId')) {
                obj['questionId'] = ApiClient.convertToType(data['questionId'], 'Number');
            }
            if (data.hasOwnProperty('responseId')) {
                obj['responseId'] = ApiClient.convertToType(data['responseId'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} questionId
 */
ScorecardValue.prototype['questionId'] = undefined;

/**
 * @member {Number} responseId
 */
ScorecardValue.prototype['responseId'] = undefined;

/**
 * @member {Number} value
 */
ScorecardValue.prototype['value'] = undefined;

/**
 * @member {Date} createdOn
 */
ScorecardValue.prototype['createdOn'] = undefined;






export default ScorecardValue;




import ApiClient from '../ApiClient';
import ScorecardValue from './ScorecardValue';

/**
 * The ScorecardData model module.
 * @module model/ScorecardData
 * @version 1.0
 */
class ScorecardData {
    /**
     * Constructs a new <code>ScorecardData</code>.
     * @alias module:model/ScorecardData
     */
    constructor() { 
        
        ScorecardData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScorecardData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScorecardData} obj Optional instance to populate.
     * @return {module:model/ScorecardData} The populated <code>ScorecardData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScorecardData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('surveyId')) {
                obj['surveyId'] = ApiClient.convertToType(data['surveyId'], 'Number');
            }
            if (data.hasOwnProperty('surveyName')) {
                obj['surveyName'] = ApiClient.convertToType(data['surveyName'], 'String');
            }
            if (data.hasOwnProperty('scorecardValues')) {
                obj['scorecardValues'] = ApiClient.convertToType(data['scorecardValues'], [ScorecardValue]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ScorecardData.prototype['id'] = undefined;

/**
 * @member {Number} userId
 */
ScorecardData.prototype['userId'] = undefined;

/**
 * @member {String} username
 */
ScorecardData.prototype['username'] = undefined;

/**
 * @member {Number} clientId
 */
ScorecardData.prototype['clientId'] = undefined;

/**
 * @member {Number} surveyId
 */
ScorecardData.prototype['surveyId'] = undefined;

/**
 * @member {String} surveyName
 */
ScorecardData.prototype['surveyName'] = undefined;

/**
 * @member {Array.<module:model/ScorecardValue>} scorecardValues
 */
ScorecardData.prototype['scorecardValues'] = undefined;






export default ScorecardData;


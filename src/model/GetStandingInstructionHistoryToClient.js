

import ApiClient from '../ApiClient';

/**
 * The GetStandingInstructionHistoryToClient model module.
 * @module model/GetStandingInstructionHistoryToClient
 * @version 1.0
 */
class GetStandingInstructionHistoryToClient {
    /**
     * Constructs a new <code>GetStandingInstructionHistoryToClient</code>.
     * @alias module:model/GetStandingInstructionHistoryToClient
     */
    constructor() { 
        
        GetStandingInstructionHistoryToClient.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStandingInstructionHistoryToClient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStandingInstructionHistoryToClient} obj Optional instance to populate.
     * @return {module:model/GetStandingInstructionHistoryToClient} The populated <code>GetStandingInstructionHistoryToClient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStandingInstructionHistoryToClient();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetStandingInstructionHistoryToClient.prototype['id'] = undefined;

/**
 * @member {String} displayName
 */
GetStandingInstructionHistoryToClient.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
GetStandingInstructionHistoryToClient.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetStandingInstructionHistoryToClient.prototype['officeName'] = undefined;






export default GetStandingInstructionHistoryToClient;


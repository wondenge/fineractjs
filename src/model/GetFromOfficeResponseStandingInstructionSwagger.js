

import ApiClient from '../ApiClient';

/**
 * The GetFromOfficeResponseStandingInstructionSwagger model module.
 * @module model/GetFromOfficeResponseStandingInstructionSwagger
 * @version 1.0
 */
class GetFromOfficeResponseStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetFromOfficeResponseStandingInstructionSwagger</code>.
     * @alias module:model/GetFromOfficeResponseStandingInstructionSwagger
     */
    constructor() { 
        
        GetFromOfficeResponseStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFromOfficeResponseStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFromOfficeResponseStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetFromOfficeResponseStandingInstructionSwagger} The populated <code>GetFromOfficeResponseStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFromOfficeResponseStandingInstructionSwagger();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('decoratedName')) {
                obj['decoratedName'] = ApiClient.convertToType(data['decoratedName'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'Number');
            }
            if (data.hasOwnProperty('openingDate')) {
                obj['openingDate'] = ApiClient.convertToType(data['openingDate'], 'Date');
            }
            if (data.hasOwnProperty('hierarchy')) {
                obj['hierarchy'] = ApiClient.convertToType(data['hierarchy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFromOfficeResponseStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFromOfficeResponseStandingInstructionSwagger.prototype['name'] = undefined;

/**
 * @member {String} decoratedName
 */
GetFromOfficeResponseStandingInstructionSwagger.prototype['decoratedName'] = undefined;

/**
 * @member {Number} externalId
 */
GetFromOfficeResponseStandingInstructionSwagger.prototype['externalId'] = undefined;

/**
 * @member {Date} openingDate
 */
GetFromOfficeResponseStandingInstructionSwagger.prototype['openingDate'] = undefined;

/**
 * @member {String} hierarchy
 */
GetFromOfficeResponseStandingInstructionSwagger.prototype['hierarchy'] = undefined;






export default GetFromOfficeResponseStandingInstructionSwagger;


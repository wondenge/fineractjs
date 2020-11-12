

import ApiClient from '../ApiClient';
import GetSelfBeneficiariesAccountOptions from './GetSelfBeneficiariesAccountOptions';

/**
 * The GetSelfBeneficiariesTPTResponse model module.
 * @module model/GetSelfBeneficiariesTPTResponse
 * @version 1.0
 */
class GetSelfBeneficiariesTPTResponse {
    /**
     * Constructs a new <code>GetSelfBeneficiariesTPTResponse</code>.
     * GetSelfBeneficiariesTPTResponse
     * @alias module:model/GetSelfBeneficiariesTPTResponse
     */
    constructor() { 
        
        GetSelfBeneficiariesTPTResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfBeneficiariesTPTResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfBeneficiariesTPTResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfBeneficiariesTPTResponse} The populated <code>GetSelfBeneficiariesTPTResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfBeneficiariesTPTResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('clientName')) {
                obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
            }
            if (data.hasOwnProperty('accountType')) {
                obj['accountType'] = GetSelfBeneficiariesAccountOptions.constructFromObject(data['accountType']);
            }
            if (data.hasOwnProperty('accountNumber')) {
                obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'Number');
            }
            if (data.hasOwnProperty('transferLimit')) {
                obj['transferLimit'] = ApiClient.convertToType(data['transferLimit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfBeneficiariesTPTResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSelfBeneficiariesTPTResponse.prototype['name'] = undefined;

/**
 * @member {String} officeName
 */
GetSelfBeneficiariesTPTResponse.prototype['officeName'] = undefined;

/**
 * @member {String} clientName
 */
GetSelfBeneficiariesTPTResponse.prototype['clientName'] = undefined;

/**
 * @member {module:model/GetSelfBeneficiariesAccountOptions} accountType
 */
GetSelfBeneficiariesTPTResponse.prototype['accountType'] = undefined;

/**
 * @member {Number} accountNumber
 */
GetSelfBeneficiariesTPTResponse.prototype['accountNumber'] = undefined;

/**
 * @member {Number} transferLimit
 */
GetSelfBeneficiariesTPTResponse.prototype['transferLimit'] = undefined;






export default GetSelfBeneficiariesTPTResponse;


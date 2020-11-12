

import ApiClient from '../ApiClient';
import GetSelfBeneficiariesAccountOptions from './GetSelfBeneficiariesAccountOptions';

/**
 * The GetSelfBeneficiariesTPTTemplateResponse model module.
 * @module model/GetSelfBeneficiariesTPTTemplateResponse
 * @version 1.0
 */
class GetSelfBeneficiariesTPTTemplateResponse {
    /**
     * Constructs a new <code>GetSelfBeneficiariesTPTTemplateResponse</code>.
     * GetSelfBeneficiariesTPTTemplateResponse
     * @alias module:model/GetSelfBeneficiariesTPTTemplateResponse
     */
    constructor() { 
        
        GetSelfBeneficiariesTPTTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfBeneficiariesTPTTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfBeneficiariesTPTTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfBeneficiariesTPTTemplateResponse} The populated <code>GetSelfBeneficiariesTPTTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfBeneficiariesTPTTemplateResponse();

            if (data.hasOwnProperty('accountTypeOptions')) {
                obj['accountTypeOptions'] = ApiClient.convertToType(data['accountTypeOptions'], [GetSelfBeneficiariesAccountOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetSelfBeneficiariesAccountOptions>} accountTypeOptions
 */
GetSelfBeneficiariesTPTTemplateResponse.prototype['accountTypeOptions'] = undefined;






export default GetSelfBeneficiariesTPTTemplateResponse;

